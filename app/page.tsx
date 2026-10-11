import TrailCards from "./components/cards/page";
import Dashboard from "./dashboard/page";
import * as MainStyle from "./page.styled";

export default function Home() {
  return (
    <main>
      <Dashboard/>

      <section>
        <h3> Upcoming Trail</h3>
        <p>Get ready for your next adventure. Check the trail details, distance, elevation gain, and scheduled date before you hit the trail.</p>
      </section>

        <TrailCards/>

       {/* <MainStyle.Box>
        <header>
          <h4>Welcome, Fellow Explorer</h4>
        </header>
        <p>
          We're glad you're here. Whether you're taking your first steps on the
          trail or you've been hiking for years, there's always a new place to
          discover and a new adventure to enjoy. Explore peaceful forests, scenic
          mountain paths, and breathtaking views while connecting with nature and
          enjoying the journey. Find inspiration for your next hike, discover new
          trails, and share the experience with people who love exploring the
          outdoors just as much as you do. There's a trail for everyone, so take a
          deep breath, lace up your boots, and let's get exploring.
        </p>
      </MainStyle.Box>

      <MainStyle.Box>
        <section>
          <header>
            <h3>Big Title Text</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. 
              Dolor sit amet consectetur adipiscing elit quisque faucibus Lorem ipsum dolor sit amet consectetur adipiscing elit. 
              Dolor sit amet consectetur adipiscing elit quisque faucibus Lorem ipsum dolor sit amet consectetur adipiscing elit. 
              Dolor sit amet consectetur adipiscing elit quisque faucibus Dolor sit amet consectetur adipiscing elit quisque faucibus Lorem ipsum dolor sit amet consectetur adipiscing elit. 
              Dolor sit amet consectetur adipiscing elit quisque faucibus Lorem ipsum dolor sit amet consectetur adipiscing elit. 
              Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
          </header>
        </section>
      </MainStyle.Box> */}
    </main>
  );
}
