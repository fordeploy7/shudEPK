import Page1 from "./_components/Page1";
import Page2 from "./_components/Page2";
import Page3 from "./_components/Page3";
import Page4 from "./_components/Page4";
import Page5 from "./_components/Page5";
import Nav from "./_components/Navbar";
import ThankYou from "./_components/Thankyou";
export default function Page(){
  return <div>
      <Page1/>
      <Nav/>
      <Page2></Page2>
      <Page3/>
      <Page4/>
      <Page5></Page5>
      <ThankYou/>
  </div>
}