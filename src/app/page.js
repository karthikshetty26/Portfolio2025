import homeCSS from './Home.module.css';
import { memo } from 'react';
import CircularText from '@/components/rotating-circular-text/rotating-circular-text';

export default function Home() {

  // Memoized Plus26 component to reuse icon
  const Plus26 = memo(() => (
    <svg width="721" height="314" viewBox="0 0 721 314" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M646.165 89.0127C643.937 78.7045 640.036 71.043 634.464 66.0282C628.892 60.7348 620.952 58.0881 610.644 58.0881C594.764 58.0881 583.341 65.0531 576.376 78.9831C569.411 92.6346 565.789 114.365 565.511 144.176C571.64 134.425 580.416 126.763 591.838 121.191C603.539 115.619 616.355 112.833 630.285 112.833C657.588 112.833 679.458 121.47 695.895 138.743C712.611 156.016 720.97 180.115 720.97 211.04C720.97 231.377 716.791 249.208 708.432 264.531C700.353 279.854 688.373 291.834 672.493 300.47C656.891 309.107 638.365 313.425 616.912 313.425C574.008 313.425 544.198 300.052 527.482 273.307C510.766 246.283 502.408 207.557 502.408 157.131C502.408 104.196 511.183 64.9138 528.735 39.2826C546.566 13.3728 574.983 0.417847 613.987 0.417847C634.882 0.417847 652.434 4.59686 666.642 12.9549C681.13 21.0343 691.995 31.7604 699.239 45.1332C706.761 58.506 711.218 73.1325 712.611 89.0127H646.165ZM613.151 169.25C601.171 169.25 591.142 172.871 583.062 180.115C575.262 187.08 571.361 197.11 571.361 210.204C571.361 223.577 574.983 234.024 582.227 241.546C589.749 249.069 600.336 252.83 613.987 252.83C626.245 252.83 635.857 249.208 642.822 241.964C650.066 234.442 653.688 224.273 653.688 211.458C653.688 198.363 650.205 188.055 643.24 180.533C636.275 173.011 626.245 169.25 613.151 169.25Z" fill="#A4E84C" />
      <path d="M254.054 254.501C263.526 246.979 267.845 243.497 267.009 244.054C294.312 221.487 315.764 202.96 331.366 188.473C347.246 173.986 360.619 158.802 371.484 142.922C382.35 127.042 387.782 111.579 387.782 96.535C387.782 85.1124 385.136 76.1972 379.842 69.7894C374.549 63.3816 366.609 60.1777 356.022 60.1777C345.435 60.1777 337.077 64.2174 330.948 72.2968C325.097 80.0976 322.172 91.2416 322.172 105.729H253.218C253.775 82.0478 258.79 62.2672 268.263 46.3869C278.014 30.5067 290.69 18.8055 306.292 11.2833C322.172 3.7611 339.724 0 358.947 0C392.101 0 417.035 8.4973 433.751 25.4919C450.746 42.4865 459.243 64.6353 459.243 91.9381C459.243 121.748 449.074 149.469 428.736 175.1C408.399 200.453 382.489 225.248 351.007 249.487H463.84V307.575H254.054V254.501Z" fill="#A4E84C" />
      <path d="M213.129 197.667H140.415V272.053H72.7147V197.667H0V133.728H72.7147V58.924H140.415V133.728H213.129V197.667Z" fill="#A4E84C" />
    </svg>
  ));
  Plus26.displayName = 'Plus26';

  // Object to store special words and their corresponding class names.
  // Each key represents a word, and the value is an array of letters that should have the class applied.
  const specialChars = {
    secondary: ['w', 't', 'b', 'o'],
  };

  // Component to split text into individual letter spans. 
  // If a letter belongs to a special word, it gets an additional class.
  const SplitText = ({ text }) => {
    return (<>
      {text.split('').map((char, index) => {
        let charClass = '';

        // Loop through specialChars to check if the letter belongs to any special word
        for (const [key, chars] of Object.entries(specialChars)) {
          if (chars.includes(char.toLowerCase())) {
            charClass = `span_${key}`;
            break;
          }
        }

        // This will return individual letters in a span tag. 
        return (
          <span key={index} className={homeCSS[charClass]}>
            {char}
          </span>
        );
      })}
    </>
    );
  };

  return (
    <>
      <main className={homeCSS.container_main}>
        <section className={homeCSS.hero_section} id='HOME'>
          <div className={homeCSS.hero_text}>
            <h1><span>Karthik</span> <span>Shetty</span></h1>
            <div className={homeCSS.hero_section_hr}></div>

            <div className={homeCSS.intro}>
              <p className={homeCSS.intro_start}>Hey there! I'm a passionate</p>
              <h2 className={homeCSS.role}>
                <span>FULLSTACK</span><br />
                <span>Web&nbsp;&nbsp;&nbsp;Developer</span>
                &nbsp;&nbsp;
                <span className={homeCSS.location}>from India.</span></h2>
            </div>
            {/* <div className={homeCSS.number_deco}><Plus26 /></div> */}

            <div className={homeCSS.hero_container}>
              <div className={homeCSS.hero_container_content}>
                <span>2+</span>
                <p>Years of Experience</p>
              </div>

              <div className={homeCSS.hero_container_content}>
                <span>6</span>
                <p>Completed Projects</p>
              </div>

              <div className={homeCSS.hero_container_content}>
                <span>4.6k+</span>
                <p>Hours Worked</p>
              </div>
            </div>
          </div>
        </section>

        <section className={homeCSS.about_section} id='ABOUT'>
          <h2>I specialize in building <strong>scalable</strong>, <strong>high-performance</strong> web applications with a strong focus on usability, efficiency, and seamless user experiences.</h2>
          <div className={homeCSS.about_content}>
            <p>with a <strong>strong</strong> background in both frontend and backend development, i love turning ideas into functional, user-friendly solutions. whether it's optimizing UI for seamless <strong>user experiences</strong> or building robust backend architectures, i’m always eager to push the boundaries of web development.<br /><br />constantly learning and improving, i aim to create impactful digital solutions that align with <strong>business goals</strong> and enhance user experiences.</p>

            <div className={homeCSS.circular_hold}>
              <CircularText
                text="•  Hi  I'm  Karthik  Shetty "
                diameter={200}
                fontSize={14}
              />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
