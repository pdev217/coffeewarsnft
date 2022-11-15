import React,{useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../components/header';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import QuadShot from '../components/quadshot';
import Spinner from 'react-bootstrap/Spinner';
import Accordion from 'react-bootstrap/Accordion';
import Gifcoffees2 from '../components/gifcoffees2';
import { singleShots, doubleMintURI } from '../config/shots';
import abi  from "../assets/CoffeeWars.json";

import { useMoralis, useMoralisFile, useChain } from "react-moralis";
import Web3 from "web3";
import axios from "axios";

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const web3 = new Web3(Web3.givenProvider);

function Home(){
        const { account } = useMoralis();
        const { saveFile } = useMoralisFile();
        const [show, setShow] = useState(false);
        const [mintStatus, setMintStatus] = useState(false);
        const { switchNetwork, chainId, chain } = useChain();
        
        const { user } = useMoralis();
        const [contract, setContract] = useState('');

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        useEffect(() => {
            const contractCode = new web3.eth.Contract(abi.abi, process.env.REACT_APP_CONTRACT_ADDRESS);
            setContract(contractCode)
        },[])

        useEffect(() => {
            if(account) {
                if(chainId != process.env.REACT_APP_CHAIN_ID) {
                    switchNetwork(process.env.REACT_APP_CHAIN_ID)
                }
            }
        }, [account])

        const getBalance = async (address) => {
            let balance = await web3.eth.getBalance(account);
            return balance
        }

        const getDataFromPinata = async (groupName) => {
            let selectedGroup;

            var config = {
                method: 'get',
                url: 'https://api.pinata.cloud/data/pinList?pageLimit=1000',
                headers: { 
                  pinata_api_key: process.env.REACT_APP_PINATA_API,
                  pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET,
                }
              };
              
            const res = await axios(config);

            res.data.rows.map(e => {
                if(e.metadata.name?.indexOf(groupName) > 0 ) {
                    selectedGroup = e;
                }
            })
              
            return selectedGroup;
        }

        //upload metadata to moralis
        const uploadFileToMoralis = async (metadata) => {
            const base64 = Buffer.from(JSON.stringify(metadata)).toString("base64");

            return saveFile(
                `${metadata.name}metadata.json`,
                { base64 },
                {
                    type: "base64",
                    saveIPFS: true,
                    onSuccess: (result) => {return result.ipfs()},
                    onError: (error) => {
                        console.log(error)
                        setMintStatus(false)
                        toast.error("Please connect your metamask")
                    },
                }
            );
        };

        const getRandomInt = (min, max) => {
            return Math.floor(min + Math.random() * (max - min))
        }

        const getExcelData = async (fileName) => {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getExcelData`, {
                fileName: fileName
            })

            return response.data
        }

        const makeMetaData = (selectedGroup, data, random) => {
            const metadata = {
                "name": data[random][1],
                "description": data[random][2],
                "image": String('https://ipfs.io/ipfs/'+selectedGroup.ipfs_pin_hash+'/'+data[random][1]),
                "attributes": [
                    {
                        "trait_type": "logo_color",
                        "value": String(data[random][3]),
                    },
                    {
                        "trait_type": "logo_style",
                        "value": String(data[random][4]),
                    },
                    {
                        "trait_type": "background_pattern",
                        "value": String(data[random][5]),
                    },
                    {
                        "trait_type": "character_name",
                        "value": String(data[random][6]),
                    },
                    {
                        "trait_type": "character_action",
                        "value": String(data[random][7]),
                    },
                    {
                        "display_type": "boost_percentage", 
                        "trait_type": "doojee", 
                        "value": Number(data[random][8])
                    },
                    {
                        "display_type": "boost_percentage", 
                        "trait_type": "style", 
                        "value": Number(data[random][9])
                    },
                    {
                        "display_type": "boost_percentage", 
                        "trait_type": "verganism", 
                        "value": Number(data[random][10])
                    },
                    {
                        "trait_type": "caffeination", 
                        "value": Number(data[random][11])
                    }, 
                    {
                        "trait_type": "Stamina", 
                        "value": Number(data[random][12])
                    }, 
                    {
                        "trait_type": "financial_stability", 
                        "value": Number(data[random][13])
                    }, 
                ]
            };

            return metadata;
        }

        const singleMint = async (e) => {
            if(!account) {
                toast.warn("Please connnect to your metamask.");
                setMintStatus(false)
                return
            }
            let balance = await getBalance(account);
            console.log("----balance", balance)
            if(balance > web3.utils.toWei(String(process.env.REACT_APP_SINGLE_PRICE))) {
                setMintStatus(true)
                let groupName = e.target.parentNode.parentNode.children[1].innerText;
                console.log('-----groupName:', groupName)

                let selectedGroup = await getDataFromPinata(groupName+" NFTs");

                console.log(selectedGroup)

                // console.log(String(groupName).toUpperCase() + 'Coffee Wars NFT LOG')
                let fileName = String(groupName).toUpperCase() + ' Coffee Wars NFT LOG' //excel file name
                console.log(fileName)

                const excelData = await getExcelData(fileName);

                //get NFT randomly
                const random = getRandomInt(2, excelData.length)

                //metadata
                const metadata = makeMetaData(selectedGroup, excelData, random)

                console.log(metadata)

                let metadataurl = await uploadFileToMoralis(metadata);
                let tokenURI = "https://ipfs.moralis.io/ipfs/" + metadataurl._hash
                console.log(tokenURI)

                contract.methods
                    .mint(String(tokenURI))
                    .send({ from: user.get("ethAddress"), value:web3.utils.toWei(String(process.env.REACT_APP_SINGLE_PRICE), "ether") })
                    .then(() => setMintStatus(false))
                    .catch((error) => {
                        if(error) {
                            setMintStatus(false)}
                        }
                    )
                console.log('----single minted');
            }else {
                toast.warn(`To mint a single shot, ${process.env.REACT_APP_SINGLE_PRICE} ETH is required.`);
            }
        }

        const doubleMint = async (e) => {
            e.preventDefault();
            if(!account) {
                toast.warn("Please connnect to your metamask.");
                setMintStatus(false)
                return
            }
            let balance = await getBalance(account);
            console.log("----balance", balance)
            if(Number(balance) > Number(web3.utils.toWei(String(process.env.REACT_APP_DOUBLE_PRICE)))) {
                setMintStatus(true)
                // let selectedGroup = await getDataFromPinata("(DOUBLE SHOT)");
                // let metadataGroup = [];
    
                // const excelData = await getExcelData("GOLD CUPS Coffee Wars NFT LOG (DOUBLE SHOT)");
    
                // for (let i = 2; i < 102; i++) {
                //     // let random = getRandomInt(2, excelData.length)
                //     let metadata = makeMetaData(selectedGroup, excelData, i)
                //     let metadataurl = await uploadFileToMoralis(metadata);
                //     metadataGroup.push(String("https://ipfs.moralis.io/ipfs/" + metadataurl._hash))
                //     console.log(i)
                // }
    
                // console.log(metadataGroup)
                console.log(doubleMintURI)
                
                await contract.methods
                    .doubleMint(doubleMintURI)
                    .send({ from: user.get("ethAddress"), value:web3.utils.toWei(String(process.env.REACT_APP_DOUBLE_PRICE), "ether") })
                    .then(() => setMintStatus(false))
                    .catch((error) => {
                        if(error) {
                            setMintStatus(false)}
                    })
                    console.log('----minted')   
            }else {
                toast.warn(`To mint a double shot, ${process.env.REACT_APP_DOUBLE_PRICE} ETH is required.`);
            }
        }

        const quadMint = async (fileName, videoLink) => {
            console.log(videoLink, fileName)
            if(!account) {
                toast.warn("Please connnect to your metamask.");
                setMintStatus(false)
                return
            }
            let balance = await getBalance(account);
            console.log("----balance", balance)
            if(Number(balance) > Number(web3.utils.toWei(String(process.env.REACT_APP_QUAD_PRICE)))) {
                setMintStatus(true)
                let selectedGroup = await getDataFromPinata("(QUAD SHOT)");
                const excelData = await getExcelData('CAFFEINATED VIDEO NFTs GIF LOG (QUAD SHOT)')
                let selectedArray;
                let excelFileName = fileName.replace(/[0-9]/g, '').replace("__", '_');
                console.log(excelFileName)

                excelData.map(e => {
                    if(String(e[1]) === String(excelFileName)) {
                        selectedArray = e;
                    }
                })

                console.log(selectedArray)

                const metadata = {
                    "name": selectedArray[1],
                    "image": String(videoLink),
                    // "image": 'https://ipfs.io/ipfs/' + selectedGroup.ipfs_pin_hash+'/' + fileName,
                    "attributes": [
                        {
                            "trait_type": "plaque inscription",
                            "value": String(selectedArray[2]),
                        },
                        {
                            "trait_type": "picture frame",
                            "value": String(selectedArray[3]),
                        },
                        {
                            "trait_type": "wall",
                            "value": String(selectedArray[4]),
                        },
                        {
                            "trait_type": "demensions",
                            "value": String(selectedArray[5]),
                        },
                        {
                            "trait_type": "character name",
                            "value": String(selectedArray[6]),
                        },
                    ]
                }

                let metadataurl = await uploadFileToMoralis(metadata);
                let tokenUrl = 'https://ipfs.moralis.io/ipfs/' + metadataurl._hash

                console.log(tokenUrl)

                contract.methods
                    .mint(String(tokenUrl))
                    .send({ from: user.get("ethAddress"), value:web3.utils.toWei(String(process.env.REACT_APP_QUAD_PRICE), "ether") })
                    .then(() => setMintStatus(false))
                    .catch((error) => {
                        if(error) {
                            setMintStatus(false)}
                    })
                console.log('----quad minted')
            }else {
                toast.warn(`To mint a double shot, ${process.env.REACT_APP_QUAD_PRICE} ETH is required.`);
            }
        }

        return(
            <div className="AppMain">
            <Header />

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {/* Banner */}
            <Container fluid>
                <Row>
                    <Col className="position-relative text-center" style={{zIndex: 12345}}>
                            <img src="images/coffee-banner.gif" className="img-fluid w-100" />

                            <Col className="position-absolute text-white text-center m-auto banner-text">
                            <h1 className="text-white shadow-orange fontsize5vmax mb-0 font-cooperitalic text-uppercase"> Watch The Teaser Now </h1>
                                <Button className="bg-transparent border-0 outline-none" href="#" onClick={handleShow}><img src="images/play.png" className="animate__animated animate__tada animate__infinite" width="80" /> </Button>
                            </Col>
                    </Col>


                    
                        {/* Video Modal  */}
                           <Modal show={show} onHide={handleClose} className="bg-transparent video-modal" size="lg">
                                <Modal.Header className="bg-transparent" closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                <iframe src="https://player.vimeo.com/video/730600895?h=920867e80e?autoplay=1&loop=1&autopause=0" height="540" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="mt-auto mb-auto" style={{ width:'100%' }}></iframe>
                                </Modal.Body>
                            </Modal>

                            {/*  Video Modal  */}

                </Row>
            </Container>
            {/* Banner */}



            {/* About */}
            <Container fluid className="pt-4 pb-2 w-75" id="about">
                <Row>
                    <Col className="w-100 text-center mx-auto">
                            <Col className="w-100 position-relative"> <img src="images/bg-heading.png" className="img-fluid bg-about" /> 
                            <h1 className="font-acierdisplay font-weight600 text-purple shadow-white fontsize5-5vmax letterspace1px mb-0 position-absolute center-hd"> About </h1> </Col>
                                <p className="text-lightyellow font-acierdisplay fontsize2-5vmax lineheight1"> 
                                <span className="text-red fontsize2-5vmax d-block"> COFFEE WARS </span> is a RAuCOUS comedy feature film <br/> set in the world of competitive baristas, <br/> In Which Baristas From Around The world <br/> compete to be crowned <span className="text-red d-block"> world barista champion. </span>  
                            </p>
                            <p className="text-lightyellow font-acierdisplay fontsize2-5vmax lineheight1"> It's the story of a ragtag team <br/> who take on the status quo <br/><span className="text-lightgreen d-block"> to make lattes the vegan way: <br/> without cow’s milk </span> to help curb the negative impact <br/> of the dairy industry on climate change. </p>
                            <p className="text-lightyellow font-acierdisplay fontsize2-5vmax lineheight1"> The Movie Was Paid For by <span className='text-lightgreen d-block'> The Good People Behind Veginvest.  </span> This film Promotes their Message. <br/> <span className='text-red'> Go to </span> <span className='text-lightgreen'>VegInvest</span><a href='https://veginvesttrust.com' target="_blank" className='text-lightgreen text-decoration-none'>(veginvesttrust.com) </a> <span className='text-red'> To learn More. </span>  </p>
                            <img src="images/veginvest-logo.png" className="img-fluid mb-3" width={150} />
                            <p className="text-lightyellow font-acierdisplay fontsize2-5vmax lineheight1 mb-1"> This nft Campaign will fund <br/> the release of <span className="text-lightred"> Coffee Wars</span> To movie theaters and streamers <br/> and Help finance sequel films in this caffeine Saga! </p>
                    </Col>
                </Row>
            </Container>
            {/* About */}



            {/* gifcoffees1 */}
                <Container fluid>
                    <Row>   
                        <Col lg={12} className="p-0 animate__animated animate__fadeIn wow animated_duration2s">
                        <img src="images/coffee-wars-fills.gif" className="img-fluid w-100" />
                        </Col> 
                    </Row>
            </Container>
            {/* gifcoffees1 */}




            
            {/* 3 Way to Cafeine */}
            <Container fluid className="pt-5 pb-5" id="cafeine-pump">
                    <Container>
                    <Row>
                            <Col sm={12} className="w-100 position-relative text-center mb-5 p-0">
                                    <img src="images/ways-bg.png" className="img-fluid" style={{width: '88vmax'}} />
                                    <h1 className="font-acierdisplay font-weight500 text-white shadow-purple fontsize3vmax letterspace2px mb-0 position-absolute cafe-pump-hd mt-4 w-100" style={{ top:'0px' }}> We Have <span className="text-lightyellow fontsize3-5vmax d-inline-block px-2"> 3 </span> Ways To Get That Caffeine Pumping! </h1>
                            </Col>

                                <Col className="d-flex flex-wrap mt-extra-up">
                                    <Col sm={4} xs={12} className="film-header position-relative text-center">
                                            <h4 className="text-lightgreen font-cooperBlack text-uppercase"> Reward </h4>
                                            <img src="images/credit-header.jpg" className='img-fluid rotate-20' width={200} />
                                            <h5 className="text-white font-acierdisplay"> Your Name In The Credits </h5>
                                    </Col>
                                    <Col sm={4} xs={12} className="film-header position-relative text-center">
                                            <h4 className="text-lightgreen font-cooperBlack text-uppercase"> Reward </h4>
                                            <img src="images/file-header.jpg" className='img-fluid rotate-20' width={200} />
                                            <h5 className="text-white font-acierdisplay"> Your Picture In The Movie </h5>
                                    </Col>
                                    <Col sm={4} xs={12} className="film-header position-relative text-center">
                                            <h4 className="text-lightgreen font-cooperBlack text-uppercase"> Reward </h4>
                                            <img src="images/film-header.jpg" className='img-fluid rotate-20' width={200} />
                                            <h5 className="text-white font-acierdisplay"> Own A Piece Of the Movie </h5>
                                    </Col>
                                </Col>
                            </Row>

                            <Row>
                            <Col sm={4} className="mt-4 p-0  d-flex flex-column">
                                    <Col className="w-100 text-center">
                                                <img src="images/coffeecup.png" className="img-fluid animate__animated animate__bounce animate__infinite" width="60%" />
                                        </Col>

                                    <Col className="w-100 text-center">
                                            <h1 className="font-cooperBlack font-weight800 text-white shadow-red text-uppercase fontsize2-5vmax lineheight1 mb-4 animate__animated animate__fadeInUp wow animated_duration2s heading-h d-inline"> Single Shot <span className="d-sm-block"> Buzzy Level </span> </h1>
                                            
                                            <Col className="equal-content w-100">
                                            <p className="font-acierdisplay fontsize1-5vmax text-lightyellow mx-auto pt-2 mb-2 lineheight1 maxwidth280"> Buy one of our <span className="text-white font-sourcesans fontsize2-5vmax font-weight800"> 11,999 </span> artistically handcrafted and completely unique character NFTs....    </p>

                                        {/* bonus Image */}
                                            <Col className="w-100 ps-sm-4 mt-2 mb-4">
                                                <a href="#bonuspurchase"><img src="images/bonus-img.png" className="img-fluid" width="231" /></a>
                                            </Col>
                                 
                                        </Col>

                                        <a href="#singleshot" className="btn bg-red border-red rounded text-white text-uppercase font-acierdisplay pt-3 pb-3 lineheight1 outline-none mt-2 hoverbtn1"> Go to Single Shot </a>

                                </Col>
                            </Col>

                        {/* double shot */}
                            <Col sm={4} className="mt-4 p-0 d-flex flex-column">
                                    <Col className="w-100 text-center">
                                                <img src="images/doubleshot.png" className="img-fluid animate__animated animate__shakeX animate__infinite" width="60%" />
                                        </Col>

                                <Col className="w-100 text-center">
                                        <h1 className="font-cooperBlack font-weight800 text-white shadow-red text-uppercase fontsize2-5vmax lineheight1 mb-4 animate__animated animate__fadeInUp wow animated_duration2s heading-h d-inline"> double SHOT BUZZmaker LEVEL </h1>

                                        <Col className="equal-content w-100">
                                            <p className="font-acierdisplay fontsize1-5vmax text-lightyellow lineheight1 maxwidth300 mx-auto pt-2 mb-4 w-80"> Buy one of the <span className="text-white font-sourcesans fontsize2-5vmax font-weight800"> 100 </span> and you get to be in the film. Yep, you heard that right. All good caffeinated movies need devoted fans. At this level we will put your picture in the film. You will also get an <span className="text-purple"> EVEN MORE RARE</span> <span className="text-white"> nft! </span> </p>
                                        </Col>
                                
                                        <a href="#doubleshot" className="btn bg-green border-green rounded text-white text-uppercase font-acierdisplay pt-3 pb-3 lineheight1 outline-none mt-2 hoverbtn4"> Go To Double Shot </a>

                                </Col>
                            </Col>
    



                            {/* Quad Heart shot */}
                                <Col sm={4} className="col-sm-4 mt-4 p-0 d-flex flex-column">
                                        <Col className="w-100 text-center">
                                            <img src="images/quadshot.png" className="img-fluid animate__animated animate__rubberBand animate__infinite" width="71%" />
                                        </Col>

                                    <Col className="w-100 text-center">
                                            <h1 className="font-cooperBlack font-weight800 text-white shadow-red text-uppercase fontsize2-5vmax lineheight1 mb-4 animate__animated animate__fadeInUp wow animated_duration2s heading-h d-inline"> quad shot heart pounding level </h1>
                                            <Col className="equal-content w-100">
                                                <p className="font-acierdisplay fontsize1-5vmax text-lightyellow maxwidth300 mx-auto pt-2 mb-4 lineheight1 w-80"> We are <span className="text-white"> sellING </span> only <span className="text-white fontsize2-5vmax"> 21 </span> 
                                                <span className="text-white"> video GIFs </span> of scenes from the film  curated and packaged. It’s an exclusive club. Each is one-of-a-kind museum quality. Imagine our baristas at the most exclusive madison avenue gallery holding a cup of joe with patterns in the milk. </p>
                                            </Col>

                                            <a href="#quadshot" className="btn bg-pink border-pink rounded text-white text-uppercase font-acierdisplay pt-3 pb-3 lineheight1 outline-none mt-2 hoverbtn2"> Go to Quad Shot </a>

                                    </Col>
                                </Col>
                    
                        

                    </Row>
                </Container>
            </Container>
              {/* 3 Way to Cafeine */}





              {/* Our Baristas */}
              <Container className="pt-4 pb-4" id="singleshot">
                <Row>
                    <Col className="col-sm-12 text-center position-relative"> 
                        <img src="images/singleshot.png" className="img-fluid" style={{width:'80vmax' }} />
                        <h1 className="font-cooperBlack font-weight600 text-white shadow-purple fontsize4vmax letterspace1px mb-0 position-absolute center-hd text-uppercase d-flex justify-content-center align-items-center lineheight0-8 m-bottom" style={{ bottom: '32px',textShadow:'4px 4px 1px #de0d00' }} > Single Shot <br/> Buzzy Level </h1>
                    </Col> 


                    <Col sm={12} className="w-100 text-center">
                            <h1 className="text-orange font-acierdisplay fontsize5vmax letterspace6px mb-0 lineheight0-8 animate__animated animate__fadeInUp wow animated_duration2s" style={{textShadow: '2px 2px 1px #fff' }}> Our Baristas </h1>
                            <h5 className="text-white text-uppercase letterspace3px font-weight700 fontsize1-5vmax"> (Hover Over To View Various Available) </h5>
                    </Col>

                    {
                        singleShots.map(e => (
                            <Col sm={4} 
                            className={e.title === "Bridget" ? 'offset-sm-4 col-12 px-1 nft-exp-box mt-5 animated animate__zoomIn wow animated_duration2s': 'px-1 nft-exp-box mt-5 animated animate__zoomIn wow animated_duration2s' }
                            key={e.title}
                            >
                                <Col className="w-100 text-center">
                                    <img src={e.url} alt={e.title} className="img-fluid mb-3" />
                                    <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> {e.title}</h5>
                                    <p className="text-orange font-weight700 fontsize17px"> {e.desc} </p>
                                    <button 
                                    className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"
                                    onClick={singleMint}
                                    disabled={mintStatus}
                                    > 
                                        <span className={mintStatus?'d-none':'d-block'}>Mint Single Shot</span>
                                        <div className={mintStatus?'d-block':'d-none'}>
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            /> loading
                                        </div>
                                    </button>
                                </Col>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
            {/* Our Baristas */}




            {/* Bonus purchase */}
            <Container className="pt-4 pb-5" id="bonuspurchase">
                <Row>
                    <Col sm={12} className="text-center position-relative"> 
                        <img src="images/singleshot.png" className="img-fluid" style={{ width:'80vmax' }} />
                        <h1 className="font-cooperBlack font-weight600 text-white shadow-purple fontsize4vmax letterspace1px mb-0 position-absolute center-hd text-uppercase d-flex justify-content-center align-items-center lineheight0-8 m-bottom" style={{ bottom:'32px',textShadow:'-6px 3px 3px #8334d1' }}> Bonus For First 1000 <br/> NFT Holders!! </h1>
                    </Col> 


                    <Col sm={12} className="text-center mb-4 mx-auto" style={{ maxWidth: '58vmax' }}>
                        <img src="images/bonus02.png" className="img-fluid mb-4" width="400" />
                        <p className="font-cooperBlack fontsize2vmax text-white lineheight1 mb-0"> For the first <span className="text-lightyellow fontsize2-5vmax"> 1000 </span> who purchase NFTs, we will add YOUR NAME to the COFFEE WARS end credits.
                        <span className="text-lightyellow text-uppercase"> Your name </span> (your real one or your coffee counter nom-de-plume) will be added to this film! You will see your name when it is released worldwide  <span className="text-lightyellow text-uppercase">  January 2023!!! </span> 
                        You will be listed along with the cast and crew! </p>
                            <p className="font-cooperBlack fontsize2vmax text-white lineheight1"> Pretty frikkin cool, right? </p>
                        </Col>

                        <Col sm={12} className="w-100 text-center mt-5 mb-5 position-relative">
                            <img src="images/bonus-section.jpg" className="img-fluid bonus-list-img" />
                            <div className="position-absolute credit-text">
                                    <img src="images/arrow.png" className='img-fluid' />
                                    <p className="text-lightyellow font-chelsea"> Your name in the credits with these guys </p>
                            </div>
                        </Col> 

                    </Row>
                </Container>
            {/* Bonus purchase */}

            



            {/* CoffeeGif2 */}
            <Gifcoffees2 />
            {/* CoffeeGif2 */}





            {/* double Shot */}
            <Container fluid className='pt-5' id="doubleshot">
                <Row>   
                    <Col sm={12} className="text-center position-relative"> 
                            <img src="images/singleshot.png" className="img-fluid" style={{ width:'80vmax' }} />
                            <h1 className="font-cooperBlack font-weight600 text-white fontsize4vmax letterspace1px mb-0 position-absolute center-hd text-uppercase lineheight1" style={{ top: '5px', textShadow: '4px 4px 3px #6cbf45' }}> Double Shot <span className="d-sm-block"> BuzzMaker </span> 
                            <span className="d-sm-block"> Level </span> </h1>
                        </Col> 

                    <Col sm={12} className="text-center mt-pull-up"> 
                            <h1 className="font-acierdisplay font-weight500 text-white shadow-purple fontsize3vmax letterspace1px mb-0" > We'll Put You Into The Film! </h1>
                    </Col>  


                    <Col sm={12} className="mt-5 d-flex flex-wrap ps-sm-5">
                        <h3 className="w-100 font-acierdisplay text-lightyellow"> Check Out This Random Dude From The Internet As An Example... </h3>
                            <Col sm={4} className="mb-4 position-relative">
                                <img src="images/people1.jpg" alt="people" className="img-fluid ms-lg-5" width="200" style={{ boxShadow: '1px 1px 13px -1px #f2fb04' }} />
                                <img src="images/arrow.png" alt="arrow" width="206" className="align-bottom" style={{ margin: '0px -4em' }} />
                            </Col>
                            <Col sm={5} className="mt-5 mt-md-auto pb-3 ms-3 ms-md-0">
                                <h3 className="text-lightyellow font-acierdisplay mb-2" style={ {lineHeight:"26px"} }> *The first 100 buyers of this level get their picture or their NFT artwork (completely up to you!) in the film. </h3>
                                <p className="text-white lineheight1 font-acierdisplay fontsize17px">We must receive your picture before  December 1st, 2022 for .your picture or your NFT artwork to be in the final version of the film to be released worldwide January 2023. please note you will not be seen in the early promotional screenings 
                                prior to the streamers launch. </p>
                            </Col>
                    </Col>


                <Col sm={12} className="p-0 text-center">
                        <img src="images/slide1.jpg" className="img-fluid w-100 mb-3" />

                        <h5 className="text-lightyellow font-cooperBlack"> Buy a Double Shot and appear in <span className="text-white text-uppercase">Coffee Wars! </span> </h5> 
                        <Button 
                        className="bg-green text-white font-acierdisplay rounded text-decoration-none pt-3 pb-3 px-2 btn outline-none mt-2 hoverbtn4" 
                        onClick={doubleMint}
                        disabled={mintStatus}
                        > 
                            <span className={mintStatus?'d-none':'d-block'}>Mint Double Shot Level</span>
                            <div className={mintStatus?'d-block':'d-none'}>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                /> loading
                            </div>
                        </Button>
                </Col>

                </Row>

                <Row className="pt-4 pb-7">
                    <h3 className="font-cooperBlack text-white text-center fontsize2vmax"> Buy Double Shot and get one of the exclusive <span className="text-lightyellow fontsize2-5vmax"> Gold Cup </span> NFTs!</h3>

                <Col sm={4} className="mt-4 flip-animated">
                    <Col className="w-100 animate__animated animate__fadeInLeft wow animated_duration2s">
                        <img src="images/goldimg1.jpg" className="img-fluid w-100" style={{ boxShadow: '0px 0px 19px 8px #f78428' }} />
                    </Col>
                </Col>

                <Col sm={4} className="mt-4 flip-animated">
                    <Col className="w-100 animate__animated animate__fadeInUp wow animated_duration2s">
                        <img src="images/goldimg2.jpg" className="img-fluid w-100" style={{ boxShadow: '0px 0px 19px 8px #f78428' }} />
                    </Col>
                </Col>

                <Col sm={4} className="mt-4 flip-animated">
                    <Col className="w-100 animate__animated animate__fadeInRight wow animated_duration2s">
                        <img src="images/goldimg3.jpg" className="img-fluid w-100" style={{ boxShadow: '0px 0px 19px 8px #f78428' }} />
                    </Col>
                </Col>
                    </Row>
        </Container>
            {/* double Shot */}






            {/* Quot Shot */}
            <QuadShot onClick={quadMint} status={mintStatus} />
            {/* Quot Shot */}



            {/* CoffeeGif3 */}
            <Container fluid>
                <Row>   
                    <Col lg={12} className="p-0 animate__animated animate__fadeIn wow animated_duration2s">
                    <img src="images/coffee-wars-fills.gif" className="img-fluid w-100" />
                    </Col> 
                </Row>
            </Container>
          {/* CoffeeGif3 */}




            {/* Manifesto */}
            <Container className="pt-4 pb-5" id="manifesto">
                <Row>
                    <Col sm={12} className="w-100 position-relative text-center ">
                          <img src="images/manifest-hd.png" className="img-fluid" style={{ width: '83vmax' }} />
                          <h1 className="font-acierdisplay font-weight600 text-red fontsize6vmax letterspace2px mb-0 position-absolute center-hd mt-2" style={{ textShadow: '-4px -4px 2px #fecc04' }}> Our Manifesto </h1>
                    </Col>

                    <Col sm={12} className="text-center mx-auto" style={{ maxWidth: '900px' }}>
                      <h2 className="text-lightyellow font-acierdisplay letterspace1px"> Pure and Simple </h2>
                      <p className="text-white font-acierdisplay lineheight1-5 fontsize1-5vmax mt-3"> The only way to make lasting change is take on the fight and make it happen... don’t wait for someone else to say you can. At <span className="text-orange"> COFFEE WARS </span> we believe that storytellers and artists deserve an outlet where they can be valued and supported without having to bow to the machine of big media. So we’re tilting the model on its head and testing a new architecture using NFTs to connect storytellers directly with their audience to essentially decentralize content production. And moreover we want to share the rewards directly with those that support us... Both financially and from a worldview perspective. </p>
                      <p className="text-white font-acierdisplay lineheight1-5 fontsize1-5vmax mt-3"> We all need to do our part to curb global warming. This is the message of <br/>
                      <span className="text-orange">  Coffee wars </span>... But we believe, why not have some fun doing it? </p>
                  </Col> 

                </Row>
            </Container>
              {/* Manifesto */}
            




            {/* RoadMap */}
            <Container className="pt-7 pb-7" id="roadmap">
                <Row>

                <Col sm={12} className="position-relative text-center">
                        <img src="images/roadmap-hd.png" className="img-fluid" style={{ width: '65vmax' }} />
                        <h1 className="font-acierdisplay shadow-white font-weight500 text-orange fontsize6vmax letterspace12px mb-0 position-absolute center-hd mt-2"> RoadMap </h1>
                  </Col>

                <Col sm={12} className="text-center mt-up">
                    <h3 className="text-uppercase text-white font-acierdisplay"> The Path From Start To Finish </h3>
                </Col>  


              {/* June */}
                <Col sm={12} className="d-flex d-flex">
                    <Col sm={4} className="mt-4">
                        <Col className="w-100">
                            <h5 className="text-white font-acierdisplay"> August 2022 </h5>
                            <h5 className="text-orange font-sourcesans font-weight700 fontsize1-5vmax"> - COFFEE WARS Website Development. </h5>
                        </Col>
                        <Col className="w-100 mt-sm-5 pt-4 animate__animated animate__fadeInLeft wow animated_duration2s">
                            <img src="images/map1.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }}/>
                        </Col>
                    </Col>
                     <Col sm={3} className="mt-4 px-sm-0 px-2">
                          <Col><img src="images/arrow.png" className="img-fluid animate__animated animate__shakeY animate__infinite" /></Col>
                      </Col>
                      <Col sm={5} className="mt-4">
                          <Col className="w-100 custom-top">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> November 2022 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Launch of COFFEE WARS NFTs. </li>
                                 <li>- Hosting of monthly Discord AMAs with filmmakers and behind-the-scenes crew. </li>
                                  <li>- The first 1000 owners of the NFT tokens will have their  names added to the end credits. </li>
                                  <li>- 100 Double Shot Level holders will have their photos added to the film. </li>
                                </ul>
                          </Col>
                      </Col>
                </Col>
                 {/* June  */}


                <Col sm={12} className="w-100 text-center mt-5">
                   <h3 className="mb-0 text-green font-acierdisplay font-weight500"> *Film Development On The Sequel GreenLit When 5000 Are Sold </h3>
                </Col>


                 {/* Octuber  */}
                <Col sm={12} className="d-flex d-flex">
                       <Col sm={4} className="mt-4">
                          <Col className="w-100">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> December 2022 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Publicity for the worldwide release of COFFEE WARS </li>
                                 <li>- Screenplay and development begins on the sequel. </li>
                              
                                </ul>
                          </Col>
                      </Col>
                    <Col sm={4} className="mt-auto">
                          <Col className="custom-top pt-5"><img src="images/arrow.png" className="img-fluid animate__animated animate__shakeY animate__infinite" /></Col>
                      </Col>
                      <Col sm={4} className="mt-4">
                        <Col className="w-100 mt-sm-5 pt-2 animate__animated animate__fadeInRight wow animated_duration2s">
                            <img src="images/map2.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                </Col>
                {/* Octuber  */}


                 {/* November  */}
                <Col sm={12} className="d-flex d-flex mt-sm-0 mt-4">
                    <Col sm={4} xs={5} className="col-sm-4 px-sm-0 px-2 mt-4">
                        <Col className="w-100 animate__animated animate__fadeInLeft wow animated_duration2s">
                            <img src="images/map3.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>

                     <Col sm={3} className="mt-auto">
                        
                      </Col>
                    
                    <Col sm={5} xs={7} className="mt-auto mb-auto">
                          <Col className="w-100">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> January 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Release of the first COFFEE WARS worldwide. </li>
                                 <li>- Development of the sequel continues. </li>
                                </ul>
                          </Col>
                      </Col>
                </Col>
                {/* November */}




                {/* Feburary  */}
                <Col sm={12} className="d-flex d-flex mt-4">
                  
                      <Col sm={6} className="mt-4">
                          <Col className="w-100 mt-3">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> March 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Pre-Production begins on the COFFEE WARS sequel. </li>
                                </ul>
                                <Col className="pt-5 text-sm-end"><img src="images/arrow.png" className="img-fluid animate__animated animate__shakeY animate__infinite" /></Col>
                          </Col>
                      </Col>
                     <Col sm={2} className="mt-auto">
                        
                      </Col>
                      <Col sm={4} className="mt-4">
                        <Col className="w-100 animate__animated animate__fadeInRight wow animated_duration2s">
                            <img src="images/map4.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                </Col>
                {/* Feburary  */}



                {/* May  */}
                <Col sm={12} className="d-flex d-flex">
                         <Col sm={4} xs={6} className="mt-sm-0 mt-4">
                        <Col className="w-100 animate__animated animate__fadeInLeft wow animated_duration2s">
                            <img src="images/map5.jpg" className="img-fluid w-100" style={{boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                     <Col sm={3} className="mt-auto">
                        
                      </Col>
                      <Col sm={5} xs={6} className="mt-auto mb-auto px-sm-0 px-3">
                          <Col className="w-100 mt-3">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> May 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Film Production begins. </li>
                                </ul>
                          </Col>
                      </Col>
                </Col>
                 {/* May */}



                {/* August */}
                <Col sm={12} className="d-flex d-flex mt-4">
                  
                      <Col sm={6} className="mt-4">
                          <Col className="w-100 mt-3">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> August 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Editorial begins on COFFEE WARS the Sequel. </li>
                                </ul>
                                <Col className="pt-5 text-sm-end"><img src="images/arrow.png" className="img-fluid animate__animated animate__shakeY animate__infinite" /></Col>
                          </Col>
                      </Col>
                     <Col sm={2} className="mt-auto">
                        
                      </Col>
                      <Col sm={4} className="mt-4">
                        <Col className="w-100 animate__animated animate__fadeInRight wow animated_duration2s">
                            <img src="images/map6.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                </Col>
                 {/* August */}



                 {/* Again November */}
                <Col sm={12} className="d-flex d-flex">
                         <Col sm={4} xs={6} className="mt-sm-0 mt-4">
                        <Col className="w-100 animate__animated animate__fadeInLeft wow animated_duration2s">
                            <img src="images/map7.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                     <Col sm={3} className="mt-auto">
                        
                      </Col>
                      <Col sm={5} xs={6} className="mt-auto mb-auto px-sm-0 px-3">
                          <Col className="w-100 mt-3">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> November 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Advanced Screening of the sequel. </li>
                                </ul>
                          </Col>
                      </Col>
                </Col>
                {/* Again November  */}
                  


               {/* Spring */}
                <Col sm={12} className="d-flex d-flex mt-3">
                  
                      <Col sm={6} xs={6} className="mt-4 px-sm-0 px-2">
                          <Col className="w-100">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> Spring 2024 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- The COFFEE WARS sequel will be released. </li>
                                  <li>- Exclusive Q&A with filmmakers. </li>
                                  <li>- And we start work on the second sequel! </li>
                                </ul>
                          </Col>
                      </Col>
                     <Col sm={2} className="mt-auto">
                        
                      </Col>
                      <Col sm={4} xs={6} className="mt-4">
                        <Col className="w-100 animate__animated animate__fadeInRight wow animated_duration2s">
                            <img src="images/map8.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                </Col>
                 {/* Spring */}



                </Row>
            </Container>
            {/* RoadMap */}




            {/* CoffeeGif4 */}
            <Container fluid>
                <Row>   
                    <Col lg={12} className="p-0 animate__animated animate__fadeIn wow animated_duration2s">
                    <img src="images/coffee-press-video.gif" className="img-fluid w-100" />
                    </Col> 
                </Row>
                <Container className="pt-5 pb-5">
                    <Row>
                        <Col sm={12} className="w-100 position-relative text-center ">
                                <img src="images/behind-hd.png" className="img-fluid" style={{ width: '68vmax' }} />
                                <h1 className="font-acierdisplay font-weight600 text-white fontsize5vmax shadow-pink letterspace2px mb-0 position-absolute center-hd mt-2"> Keep Up With Us </h1>
                        </Col>

                        <Col sm={12} className="w-100 text-center mx-auto" style={{ maxWidth: '980px' }}>
                            <h2 className="text-red font-acierdisplay letterspace1px"> Follow Our Progress </h2>
                            <p className="text-white font-acierdisplay lineheight1-3 fontsize2vmax mt-4 font-weight400"> We will hold monthly online meetings connecting our <span className="text-lightred"> NFT partners </span> with the artists and filmmakers who are bringing
                             <span className="text-lightred"> coffee wars </span> to the world. And when the films are complete, our nft holders will get first premiere access to the film before anyone else has seen it. Our intention is to shake things up. Enough waiting around for some big studio with their bureaucratic pencil-pushers. We are
                              <span className="text-lightred"> coffee wars</span>,  and we are ready to get our caffeine on!</p>
                            <a href="https://discord.gg/KDF5HKa3mb" target="_blank" className="bg-purple rounded font-acierdisplay text-white fontsize2vmax outline-none px-4 d-inline-block text-decoration-none pt-2 pb-1 letterspace1px hoverbtn3">  Discord </a>
                        </Col> 
                </Row>
                </Container>
        </Container>
              {/* CoffeeGif4 */}



              {/* Bethind This */}
              <Container className="pt-5 pb-5">
                <Row >   
                    <Col sm={8} className="position-relative text-center position-relative text-center offset-sm-2">
                        <img src="images/behind-hd.png" className="img-fluid" style={{ width: '81vmax' }} />
                        <h1 className="font-acierdisplay shadow-white font-weight500 text-orange fontsize3vmax letterspace8px mb-0 position-absolute cafe-pump-hd align-items-center d-flex justify-content-center center-hd mt-2"> Who is Behind This? </h1>
                    </Col>

                    <Col sm={12} className="w-100 text-center mt-4">
                      <p className="text-white font-acierdisplay fontsize1-5vmax lineheight1-3 text-white font-acierdisplay fontsize1-5vmax lineheight1-3 col-8 offset-2"> 
                        The filmmakers behind the <span className="text-lightred">Coffee wars NFT</span> are Highly experienced moviemakers and the creators of many made studio and independent films
                        {/* The filmmakers behind the <span className="text-lightred">COFFEE WARS NFT</span> are highly experienced moviemakers and the creators of many studio and independent films.  */}
                    </p>
                    </Col>

                    
                    <Col md={3} className="mt-5">
                      <Col className="w-100 text-center mt-md-5">
                            <Col className="mb-4 img-effect-s img-effect overflow-hidden" style={{ boxShadow: '1px 1px 13px 2px #fff' }}>
                                <img src="images/img02.jpg" className="img-fluid" />
                            </Col>
                            <h4 className="text-lightred font-acierdisplay mb-2"> Randall Miller </h4>
                            <p className="text-white font-sourcesans font-weight600 font-normal max-width300 mx-auto"> Writer/Director Randall Miller is the director of CBGB, Bottle Shock, Coffee Wars, Houseguest  and Class Act <br />Check him out here:</p>
                            <a href="https://www.imdb.com/name/nm0589168/" target="_blank" className="text-black bg-yellow rounded d-inline-block font-sourcesans text-decoration-none px-5 pt-2 pb-2 font-weight700 hoverbtn3"> IMDb </a>
                      </Col>
                    </Col>

                    <Col md={6} className="mt-5">
                        <Col className="w-100 text-center position-relative">
                                <Col className="mb-4 img-effect-c img-effect overflow-hidden position-relative" style={{ boxShadow: '1px 1px 13px 2px #fff' }}>
                                    <img src="images/img04.png" className="img-fluid w-100 h-100" />
                                </Col>
                                    <img src="images/reward.png" alt="reward" className='reward-png' />
                                {/* <h4 className="text-lightred font-acierdisplay mb-2"> Michael and Randy </h4> */}
                                <p className="text-white font-sourcesans font-weight600 font-normal max-width500 mx-auto mb-2"> Michael and Randy will be conducting monthly on air AMAs</p>
                                <h4 className='text-yellow font-acier text-uppercase mb-0' style={{letterSpacing: "2px"}}>exclusively for all NFT holders</h4>
                                <p className="text-white font-sourcesans font-weight600 font-normal max-width500 mx-auto">on the film business, their experiences, entrepreneurship and <br /> everything in between.
                                    <br />A masterclass in how to navigate the entertainment business.
                                </p>
                        </Col>
                    </Col>

                  <Col md={3} className="mt-5">
                      <Col className="w-100 text-center mt-md-5">
                            <Col className="mb-4 img-effect-s img-effect overflow-hidden" style={{ boxShadow: '1px 1px 13px 2px #fff' }}><img src="images/img03.jpg" className="img-fluid" /></Col>
                            <h4 className="text-lightred font-acierdisplay mb-2"> Michael Davis </h4>
                            <p className="text-white font-sourcesans font-weight600 font-normal max-width300 mx-auto"> Writer/Director Michael Davis is the director of Shoot 'Em Up,<br /> 100 Girls and  8 Days A Week. <br />Check him out here: </p>
                            <a href="https://www.imdb.com/name/nm0205157/" target="_blank" className="text-black bg-yellow rounded d-inline-block font-sourcesans text-decoration-none px-5 pt-2 pb-2 font-weight700 hoverbtn3"> IMDb </a>
                      </Col>
                  </Col>


                </Row>
        </Container>
             {/* Bethind This */}



    

            </div>
        );
}


export default Home;