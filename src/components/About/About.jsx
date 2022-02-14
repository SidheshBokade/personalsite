import React, { useRef, Suspense, memo } from 'react'
import styles from './About.module.css'
import TechStack from '../techStack/TechStack'

import CircleLoader from "react-spinners/CircleLoader";
import Fade from 'react-reveal/Fade';




function About({ handleClose }) {
    const paraRef = useRef(null)
    const skills = ['javascript', 'HTML', 'CSS', 'React', 'UI/UX', 'Node JS', 'Mongo Db', 'bootstrap', 'figma','Wordpress','C', 'C++','DBMS','OOP','DataStructures & Algorithms','OS','Aptitude']
  


    return (
        <div className={styles.aboutContainer} >
            <button className={styles.closebtn} onClick={(e) => handleClose(e)}>X</button>
            <Suspense fallback={<CircleLoader size={150}
                color={"#123abc"}
                loading={true}></CircleLoader>}>
                <div className={styles.imgDiv}></div>


            </Suspense>
            <Fade duration={3000}>
                <div className={styles.para} ref={paraRef}>
                    I love space (no kidding).I am a sophomore year student, pursuing B.E in Computer Science Engineering, graduating in 2023.
        A MERN stack developer ,pursuing Data Structures & Algorithms And Core CS fundamentals with willingness to learn new technologies and take up roles that are challenging and full of learnings.
        I am open for internships roles, in the field of Software Engineering. 
        You can reach out to me for any such opportunity at : avdheshbokade95@gmail.com
            </div>
            </Fade>
            <h1> Skills:</h1>
            <Fade duration={2000}>
                <div className={styles.skills}>
                    <TechStack skills={skills} font="big"></TechStack>
                </div>
            </Fade>
           



        </div>
    )
}

export default memo(About)
