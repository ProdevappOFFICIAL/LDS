import CustomHeader from "@/components/common/CustomHeader";

  const About = () => {
    return ( <div className="flex flex-col items-center  pt-20 text-white w-full h-screen bg-blue-600">
         
             <img src="/lds.jpg" alt="lds" width={100} height={100}/>
              <div>
             n    <CustomHeader  title={"LearningDeck"} description={""}/>
              </div>



       
       </div>  );
  }
   
  export default About;