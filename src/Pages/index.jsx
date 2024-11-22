import React, { useState, useEffect } from 'react';
import image from '../Images/impMain.jpg'
import secondPeople from '../Images/someSummary.png'
import joemon from '../Images/joemon.png'
import arjun from '../Images/arjun.png'
import siju from '../Images/siju.png'
import sona from '../Images/sona.png'
import sangeetha from '../Images/sangeetha.png'
import renji from '../Images/renji.png'
import harrish from '../Images/harrish.png'
import devMohan from '../Images/devMohan.png'
import imdb from '../Images/imdb.png'
import socialIcons from '../Images/SM-icons.png'

const MultiOptionHighlight = () => {

    const handleDivClick = (link) => {
        window.open(link); // Opens the link in a new tab
    };

    return (
        <>
        <div className="fixedIconSwage">
            <img src={socialIcons} alt="notsure" />
            <div className='linker1FB cp' onClick={() => {
                    handleDivClick('https://www.facebook.com/ParakramamMovie/')
                }}></div>
                <div className='linker2Istg cp'
                    onClick={() => {
                        handleDivClick('https://www.instagram.com/p/CwO1druJTnH/?hl=en')
                    }}
                ></div>
                <div className='linker3YTB cp'
                    onClick={() => {
                        handleDivClick('https://m.youtube.com/@ParakramamMovie/shorts')
                    }}
                ></div> 
        </div>
            <div className="imageParent">
                {/* <div className='linker1FB cp' onClick={() => {
                    handleDivClick('https://www.facebook.com/ParakramamMovie/')
                }}></div>
                <div className='linker2Istg cp'
                    onClick={() => {
                        handleDivClick('https://www.instagram.com/p/CwO1druJTnH/?hl=en')
                    }}
                ></div>
                <div className='linker3YTB cp'
                    onClick={() => {
                        handleDivClick('https://www.youtube.com/@ParakramamMovie')
                    }}
                ></div> */}

                <img className='theHeroSection' src={image} alt="" />
            </div>
            <div className="secondSection">
                <div className="textStory C">
                    STORY
                </div>
                <div className="storySection">
                    <div className="img">
                        <img src={secondPeople} alt="" />
                    </div>

                    <div className="summarry S">
                        <span className="part1">
                            Parakramam is an inspiring and light-hearted
                            coming-of-age drama that follows Vishakh, portrayed by
                            rising star Dev Mohan, as he embarks on a transformative
                            journey to become an army major.
                        </span>
                        <span className="part2">
                            Vishakh grapples with self-doubt and bullying while
                            navigating a strained relationship with his mother while he
                            totally adores his father, Col. Sukumaran. Throughout his
                            journey, he finds solace in the unwavering support of his
                            friends and the blossoming of a sweet romance that helps
                            him build confidence. However, certain turn of events in his
                            life break him down before he turns into an army
                            commando with a mission.
                        </span>
                    </div>
                </div>

                <div className="C textPreview">
                    PREVIEW
                </div>

                <div className="prviewSection">
                    <iframe src="https://www.youtube.com/embed/DnRUXyJpPYQ" title="Parakramam Official Teaser | Arjun Ramesh | Dev Mohan | Siju Sunny | Sona Olickal | Amith Mohan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://www.youtube.com/embed/FA9-tx2Yftk" title="Parakramam Official Trailer | Arjun Ramesh | Dev Mohan | Siju Sunny | Sona Olickal | Amith Mohan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://www.youtube.com/embed/t4b_2-Av3QI?list=PLpzDnEqPoRafHOEaTrbXbbrdDfnOlVmWL" title="Kanmaniye Video Song | Parakramam | Dev Mohan | Sona Olickal | Kapil Kapilan |Anoop Nirichan |Arjun" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe src="https://www.youtube.com/embed/ZqDvjZddpeE" title="Neeyen Video Song | Parakramam | Dev Mohan | Sona Olickal | Anoop Nirichan | Arjun Ramesh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>


                <div className="C textPlayer">
                    PLAYERS
                </div>

                <div className="playerSection">
                    <div className="sect1">
                        <div className="people">
                            <div className="imgCont">
                                <img src={devMohan} alt="" />
                                <img src={imdb} onClick={() => {
                                    handleDivClick('https://www.imdb.com/name/nm11701991/?ref_=tt_cl_t_3')
                                }} alt="" />
                            </div>

                            <div className="textContainer">
                                <div className="titleContainer">
                                    <div className="title">
                                        Dev Mohan
                                    </div>

                                    <div className="position">
                                        as Vishakh
                                    </div>
                                </div>

                                <div className="summarCont">
                                    In a short span of time, Dev Mohan has managed to carve a
                                    niche for himself in both the Malayalam and Telugu film industries.
                                    With his compelling performances in films like  '
                                    '<b>
                                        Sufiyum
                                        Sujatayum
                                    </b>
                                    ' ,
                                    '<b>

                                        Panthrandu
                                    </b>'
                                    in Malayalam and
                                    '<b>

                                        Shakunthalam
                                    </b>'

                                    in
                                    Telugu, Dev is a performer to watch out for. He has two films up
                                    for release in telugu, with one being opposite Rashmika
                                    Mandanna. In our project
                                    '<b>

                                        Parakramam
                                    </b>'

                                    he plays the role of Vishakh
                                    Sukumaran, son of a celebrated army officer, Lt. Col. Sukumaran,
                                    whose life journey forms the core of the story.
                                </div>
                            </div>
                        </div>

                        <div className="people">
                            <div className="imgCont">
                                <img src={sangeetha} alt="" />
                                <img src={imdb} onClick={() => {
                                    handleDivClick('https://www.imdb.com/name/nm0762660/?ref_=nv_sr_srsg_0_tt_1_nm_7_in_0_q_sangeetha%2520nair')
                                }} alt="" />
                            </div>

                            <div className="textContainer">
                                <div className="titleContainer">
                                    <div className="title">
                                        Sangeetha
                                    </div>

                                    <div className="position">
                                        as Savithri
                                    </div>
                                </div>

                                <div className="summarCont">
                                    A Veteran actor with over 100 films to her credit, Sangeetha has
                                    worked in Malayalam, Tamil and Kannada film industries,
                                    predominantly in the 1990s. Sangeetha stormed into the
                                    imagination of the Malayali audience with her breathtaking
                                    performance in
                                    '<b>
                                        Chinthavishtayaya Shyamala
                                    </b>'
                                    . In our project
                                    '<b>

                                        Parakramam
                                    </b>'
                                    , she plays the role of Savithri, Vishakh’s divorced
                                    mother who constantly tries to win over her son’s love. Vishakh
                                    wrongly believed that she was responsible for their divorce and
                                    considered his father his only hero.
                                </div>
                            </div>
                        </div>

                        <div className="people">
                            <div className="imgCont">
                                <img src={sona} alt="" />
                                <img src={imdb} onClick={() => {
                                    handleDivClick('https://www.imdb.com/name/nm13564781/?ref_=fn_al_nm_1')
                                }} alt="" />
                            </div>

                            <div className="textContainer">
                                <div className="titleContainer">
                                    <div className="title">
                                        Sona Olickal a
                                    </div>

                                    <div className="position">
                                        as Anupama
                                    </div>
                                </div>

                                <div className="summarCont">
                                    Sona Olickal is one of the most promising young actresses coming
                                    up from the Malayalam film industry. She came into prominence
                                    with her notable performance in
                                    '<b>

                                        Veyil
                                    </b>'
                                    . Her upcoming film is
                                    '<b>

                                        Khadakam
                                    </b>'
                                    opposite Hakim Shahjahan.
                                </div>
                            </div>
                        </div>


                        <div className="people">
                            <div className="imgCont">
                                <img src={arjun} alt="" />
                            </div>

                            <div className="textContainer">
                                <div className="titleContainer">
                                    <div className="title">
                                        Arjun Ramesh
                                    </div>

                                    <div className="position">
                                        Writer-Director
                                    </div>
                                </div>

                                <div className="summarCont">
                                    With over a decade of experience as a software engineer in the IT
                                    industry, Arjun’s creative journey took a pivotal turn when he began
                                    working as a script assistant under the mentorship of National
                                    Award-winning director Shyamaprasad, celebrated for films like
                                    '<b>

                                        Agnisakshi
                                    </b>'
                                    and
                                    '<b>

                                        Artist
                                    </b>'
                                    . From there, Arjun went on to become an
                                    assistant director with acclaimed filmmaker Arun Kumar Aravind
                                    on
                                    '<b>

                                        Underworld
                                    </b>'
                                    . Known for groundbreaking works such as
                                    '<b>

                                        Left
                                        Right Left
                                    </b>'
                                    ,
                                    '<b>

                                        Cocktail
                                    </b>'
                                    , and
                                    '<b>

                                        Ee Adutha Kalathu
                                    </b>'
                                    , Arun Kumar further
                                    shaped Arjun’s path in the industry, adding depth to his storytelling
                                    vision.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sect2">
                        <div className="people">
                            <div className="imgCont">
                                <img src={siju} alt="" />
                                <img src={imdb} onClick={() => {
                                    handleDivClick('https://www.imdb.com/name/nm12998937/?ref_=fn_al_nm_1')
                                }} alt="" />
                            </div>

                            <div className="textContainer">
                                <div className="titleContainer">
                                    <div className="title">
                                        Siju Sunny
                                    </div>

                                    <div className="position">
                                        as Balu
                                    </div>
                                </div>

                                <div className="summarCont">
                                    Siju is one of those rare young actors who can effortlessly switch between humor and emotional depth. Rising to prominence with the blockbuster horror comedy 
                                    '<b>
                                        
                                    Romancham
                                    </b>'
                                     and his memorable role in 
                                     '<b>
                                     Vaazha
                                    </b>'
                                     , Siju has become a household name in Malayalam cinema. Now, he's set to shine in the Prithviraj-starrer 
                                     '<b>
                                        
                                     Guruvayoor Ambalanadayil
                                    </b>'
                                     , taking on a prominent role that promises to captivate audiences.
                                </div>
                            </div>
                        </div>
                        <div className="people">
                            <div className="imgCont">
                                <img src={renji} alt="" />
                                <img src={imdb} onClick={() => {
                                    handleDivClick('https://www.imdb.com/name/nm1001625/?ref_=nv_sr_srsg_0_tt_1_nm_4_in_0_q_RENJI%2520PANICKER')
                                }} alt="" />
                            </div>

                            <div className="textContainer">
                                <div className="titleContainer">
                                    <div className="title">
                                        Renji Panicker
                                    </div>

                                    <div className="position">
                                        as Lt. Col. Sukumaran Nair
                                    </div>
                                </div>

                                <div className="summarCont">
                                    Renji Panicker is an actor, scriptwriter, director, film producer,
                                    and journalist. Apart from the many screenplay works, he is an
                                    acknowledged as a terrific actor. Some of his memorable
                                    performances have come in
                                    '<b>

                                        Om Shanti Oshana
                                    </b>'
                                    and
                                    '<b>

                                        Godha.
                                    </b>'
                                </div>
                            </div>
                        </div>
                        <div className="people">
                            <div className="imgCont">
                                <img src={joemon} alt="" />
                                <img src={imdb} onClick={() => {
                                    handleDivClick('https://m.imdb.com/name/nm11593017/')
                                }} alt="" />
                            </div>

                            <div className="textContainer">
                                <div className="titleContainer">
                                    <div className="title">
                                        Joemon Jyothir
                                    </div>

                                    <div className="position">
                                        as Vinod
                                    </div>
                                </div>

                                <div className="summarCont">
                                    Joemon Jyothir is a rising star in the Malayalam film industry, celebrated for his effortless charm and magnetic screen presence. He first caught the audience’s attention with his standout performance in 
                                    '<b>
                                    Romancham
                                    </b>'
                                    , where his impeccable timing and natural flair left a lasting impression. With hits like 
                                    '<b>
                                    
                                    Vaazha
                                    </b>'
                                     under his belt, Joemon continues to cement his position as one of the most promising young talents in the industry.
                                </div>
                            </div>
                        </div>
                        <div className="people">
                            <div className="imgCont">
                                <img src={harrish} alt="" />
                            </div>

                            <div className="textContainer">
                                <div className="titleContainer">
                                    <div className="title">
                                        Harris Desom
                                    </div>

                                    <div className="position">
                                        Executive Producer
                                    </div>
                                </div>

                                <div className="summarCont">
                                    Harris is one of the most respected names in the Malayalam film
                                    industry, known for his business acumen and pragmatism when it
                                    comes to film production. Known for his cent percent track record of
                                    working in successful films and working primarily with Prithviraj
                                    Sukumaran, he has a bevy of successful films to his credit like
                                    '<b>

                                        Driving License
                                    </b>'

                                    '<b>

                                        Kuruthi
                                    </b>'
                                    ,

                                    '<b>

                                        Varane Avashyamund
                                    </b>'
                                    to name a few.
                                    His maiden production
                                    '<b>

                                        Jo & Jo
                                    </b>'

                                    under the banner of Imagin
                                    Cinemas was a runaway hit at the box office.
                                    <br></br> <br />
                                    He then went on to produce

                                    '<b>

                                        Momo in Dubai
                                    </b>'
                                    , a children’s based film
                                    that won acclaim and awards from various quarters, followed by the
                                    critically acclaimed
                                    '<b>

                                        Ayesha
                                    </b>'
                                    starring Manju Warrier. His latest
                                    blockbuster,
                                    '<b>

                                        Vaazha
                                    </b>'
                                    , featured Siju, Joemon, and Amit as leads, and
                                    this talented trio also stars in

                                    '<b>

                                        Parakramam
                                    </b>'
                                    , bringing their presence
                                    and talent to a new, inspiring story.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MultiOptionHighlight;
