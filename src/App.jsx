import './App.scss';
import Badge from './components/Badge/Badge';
import Button from './components/Button/Button';
import Cabinet from './components/Cabinet/Cabinet';
import { Back, Btn, Burger, Facebook, Half, In, Instagramm, Rectangle, Round, Top, Twitter, Wave } from './components/Images/icons';
import Background from './components/Images/icons/Background';
import { Bath, Bed, Chevron, Description, Expand, Family, Foot, House, Key, Location, Payments, Receipt, Search, Shopping, Star } from './components/Images/system';
import Work from './components/Work';

function App() {
  return (
    <div className="app">
      
    <header className='topbar'>
      <a href="#">
         <img src="./Images/logo.svg" alt="logo" />
      </a>

      <div className='menu'>
          <div className="menuList">
            <a className='menuItem' href="#">Home</a>
            <div className='menuIcon'>
            <a className='menuItem' href="#">Properties</a>
            <a href=""> <Expand/> </a>
            </div>
            <a className='menuItem' href="#">About</a>
            <a className='menuItem' href="#">Contact</a>
            <div className='menuIcon'>
              <a href=""> <Search/> </a>
              <a className='menuItem' href="#">Search</a>
            </div>
          </div>
          <div className='menuContent'>
            <Button
              icon={<Shopping/>}
              title="Cart"
              variant="gray"
            />
            <Button
              title="Find a property"
              variant="orange"
            />
          </div>
      </div>
    </header>
 
    <div className="header">

    <div className='headerMain'>
    <div>
      <Background/>
      </div>
      <div className="headerContent">
        <div>
          <Badge
            title="Find your dream place"
            size="big"
            variant="gray"
          />
        </div>

        <div >
          <h2 className='headerTitle'>Find house for your family in minutes</h2>'
          <p className='headerSupTitle'>
          Aenean sodales mauris quis tellus facilisis, vel mattis 
          magna. Interdum curabitur eget aliquam elit in mauris 
          purus.
          </p>
        </div>
        <div className='headerItem'>
          <div className='headerSearch'>
            <Search/>
            <input className='headerInput' type="text" placeholder='Search' />
          </div>
          <div>
            <Button
              title="Find property"
              size="middle"
              variant="orange"
            />
          </div>
        </div>
      </div>

      <div className='headerBack'>
          <Back/>
      </div>
    </div>

     
    



      <div className="headerLeft">
        <img src="./Images/bigHom.png" alt="error" />
      </div>
    </div>

    <div className="brands">
      <div>
        <p className='brandsTitle'>
          As seen on the world's best magazines and media
        </p>
      </div>

      <div className='brandsIcons'>
        <Round/>
        <Rectangle/>
        <Wave/>
        <Half/>
        <Burger/>
      </div>
    </div>
    


    <div className='work'>
        <div className="workContent">
          <h2 className='workTitle'>How it works</h2>
          <p className='workSupTitle'>Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque. 
            Maecenas varius felis felis.</p>
        </div>
        <div className="workMenu">
          <Work
              icon={<House/>}
              title="Find property"
              supTitle="Odales mauris quis tellus facilisis, vel mattis 
                magna interdum. Curabitur eget aliquam elit. In 
                mauris purus, auctor a eleifend non."
          />

          <Work
              icon={<Receipt/>}
              title="Make a deal"
              supTitle="Pellentesque suscipit mauris. Nam dictum, 
                  erat a volutpat varius, urna nisi sollicitudin 
                  orci, sagittis facilisis odio tortor ac mi."
          />

          <Work
              icon={<Key/>}
              title="Get your keys"
              supTitle="Nulla vel bibendum purus. Etiam tempus 
                quam vel pulvinar rutrum. Duis semper, 
                metus vitae fermentum consequat."
          />
        </div>
      
     
    </div>

    <div className="comfort">
      <div className="comfortContent">
        <div className="comfortBadge">
          <Badge
            title="Comfort first"
            size="big"
            variant="gray"
          />
        </div>
        <div className="comfortText">
          <h2 className='comfortTitle'>The best houses for family comfort</h2>
          <p className='comfortSupTitle'>
            Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin 
            sollicitudin, lorem non posuere blandit.
          </p>
        </div>
        <div className='comfortInfo'>
          <div>
            <Button
              title="Explore properties"
              size="big"
              variant="gray"
            />
          </div>
          <div className='comfortView'>
            <a className='comfortLink' href="#">Contact agent</a>
            <a className='comfortLink' href="#"> <Chevron/> </a>
          </div>
        </div>
      </div>
      <div>
        <img src="./Images/comfort.png" alt="error" />
      </div>
    </div>

    <div className="quick">
      <div>
        <img src="./Images/quick.png" alt="error" />
      </div>
      <div className='quickContent'>
        <div className='quickBadge'>
          <Badge
            title="Quick and easy"
            size="big"
            variant="gray"
          />
        </div>
        <div className="quickText">
          <h2 className='quickTitle'>Fast forward process</h2>
          <p className='quickSupTitle'>Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi 
            arcu praesent nec felis nisl.</p>
        </div>
 
        <div className='quickMenu'>
          <div className="quickMenuList">
            <div className='quickMenuIcon'>
              <Payments/>
            </div>
            <div className="quickMenuText">
              <h2 className='quickMenuTitle'>Affordable prices</h2>
              <p className='quickMenuSupText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
          </div>

          <div className="quickMenuList">
            <div className='quickMenuIcon'>
              <Description/>
            </div>
            <div className="quickMenuText">
              <h2 className='quickMenuTitle'>Less paper work</h2>
              <p className='quickMenuSupTitle'>Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi.</p>
            </div>
          </div>
        </div>

        <div className="quickView">
          <div>
            <Button
              title="Explore properties"
              size="big"
              variant="gray"
            />
          </div>
          <div className='quickLink'>
            <a className='quickLinkItem' href="#">Contact agent</a>
            <a className='quickLinkItem' href="#"> <Chevron/> </a>
          </div>
        </div>

      </div>
    </div>

   
    <div className="properties">
      <div className="propertiesItem">
        <Badge
          title="Properties"
          size="big"
          variant="gray"
        />
        <h2 className='propertiesTitle'>Houses in your favorite area</h2>
      </div>
      

      <div className="propertiesMenu">

        <div className="propertiesMenuList">
          <img src="./Images/house.png" alt="error" />
          <div className='propertiesMenuListItem'>
            <div className='propertiesContent'>
                  <h2 className='propertiesText'>Cozy studio in Los Angeles</h2>
                  <h2 className='propertiesSupTitle'>$ 1,200.00 USD</h2>
            </div>

           
            <div className='propertiesInfo'>
              <Location/> 
              <p className='propertiesInfoText'>2263 Southlea, Los Angeles</p>
            </div>

            <div className='propertiesList'>
              <div className='propertiesInfo'>
                <Bath/>
                <p className='propertiesInfoText'>2</p>
              </div>
              <div className='propertiesInfo'>
                <Bed/>
                <p className='propertiesInfoText'>2</p>
              </div>
              <div className='propertiesInfo'>
                <Foot/>
                <p className='propertiesInfoText'>840 sqft</p>
              </div>
            </div>

          </div>
        </div>

        <div className="propertiesMenuList">
          <img src="./Images/diego.png" alt="error" />
          <div className='propertiesMenuListItem'>
            <div className='propertiesContent'>
                  <h2 className='propertiesText'>Tiny home in San Diego</h2>
                  <h2 className='propertiesSupTitle'>$ 740,000.00 USD</h2>
            </div>

           
            <div className='propertiesInfo'>
              <Location/> 
              <p className='propertiesInfoText'>2569 El Segundo, San Diego</p>
            </div>

            <div className='propertiesList'>
              <div className='propertiesInfo'>
                <Bath/>
                <p className='propertiesInfoText'>1</p>
              </div>
              <div className='propertiesInfo'>
                <Bed/>
                <p className='propertiesInfoText'>2</p>
              </div>
              <div className='propertiesInfo'>
                <Foot/>
                <p className='propertiesInfoText'>400 sqft</p>
              </div>
            </div>

          </div>
        </div>

        <div className="propertiesMenuList">
          <img src="./Images/newyork.png" alt="error" />
          <div className='propertiesMenuListItem'>
            <div className='propertiesContent'>
                  <h2 className='propertiesText'>Crown house in New York</h2>
                  <h2 className='propertiesSupTitle'>$ 980,000.00 USD</h2>
            </div>

           
            <div className='propertiesInfo'>
              <Location/> 
              <p className='propertiesInfoText'>4489 Smity Fielda, New York</p>
            </div>

            <div className='propertiesList'>
              <div className='propertiesInfo'>
                <Bath/>
                <p className='propertiesInfoText'>2</p>
              </div>
              <div className='propertiesInfo'>
                <Bed/>
                <p className='propertiesInfoText'>4</p>
              </div>
              <div className='propertiesInfo'>
                <Foot/>
                <p className='propertiesInfoText'>3200 sqft</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="propertiesMenu">

        <div className="propertiesMenuList">
          <img src="./Images/losagels.png" alt="error" />
          <div className='propertiesMenuListItem'>
            <div className='propertiesContent'>
                  <h2 className='propertiesText'>Family house in Los Angeles</h2>
                  <h2 className='propertiesSupTitle'>$ 4,200.00 USD</h2>
            </div>

           
            <div className='propertiesInfo'>
              <Location/> 
              <p className='propertiesInfoText'>2263 Southlea, Los Angeles</p>
            </div>

            <div className='propertiesList'>
              <div className='propertiesInfo'>
                <Bath/>
                <p className='propertiesInfoText'>2</p>
              </div>
              <div className='propertiesInfo'>
                <Bed/>
                <p className='propertiesInfoText'>3</p>
              </div>
              <div className='propertiesInfo'>
                <Foot/>
                <p className='propertiesInfoText'>1400 sqft</p>
              </div>
            </div>

          </div>
        </div>

        <div className="propertiesMenuList">
          <img src="./Images/lasvegas.png" alt="error" />
          <div className='propertiesMenuListItem'>
            <div className='propertiesContent'>
                  <h2 className='propertiesText'>Studio in Las Vegas</h2>
                  <h2 className='propertiesSupTitle'>$ 820,000.00 USD</h2>
            </div>

           
            <div className='propertiesInfo'>
              <Location/> 
              <p className='propertiesInfoText'>2569 Halls Corner, Las Vegas</p>
            </div>

            <div className='propertiesList'>
              <div className='propertiesInfo'>
                <Bath/>
                <p className='propertiesInfoText'>2</p>
              </div>
              <div className='propertiesInfo'>
                <Bed/>
                <p className='propertiesInfoText'>3</p>
              </div>
              <div className='propertiesInfo'>
                <Foot/>
                <p className='propertiesInfoText'>2400 sqft</p>
              </div>
            </div>

          </div>
        </div>

        <div className="propertiesMenuList">
          <img src="./Images/sanstory.png" alt="error" />
          <div className='propertiesMenuListItem'>
            <div className='propertiesContent'>
                  <h2 className='propertiesText'>San Diego story</h2>
                  <h2 className='propertiesSupTitle'>$ 3,700.00 USD</h2>
            </div>

           
            <div className='propertiesInfo'>
              <Location/> 
              <p className='propertiesInfoText'>2569 El Segundo, San Diego</p>
            </div>

            <div className='propertiesList'>
              <div className='propertiesInfo'>
                <Bath/>
                <p className='propertiesInfoText'>1</p>
              </div>
              <div className='propertiesInfo'>
                <Bed/>
                <p className='propertiesInfoText'>2</p>
              </div>
              <div className='propertiesInfo'>
                <Foot/>
                <p className='propertiesInfoText'>650 sqft</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='propertiesView'>
        <div>
          <Button
           title="Explore properties"
           size="big"
           variant="gray"
          />
        </div>
        <div className="propertiesLink">
          <a className='propertiesLinkItem' href="#">Contact agent</a>
          <a className='propertiesLinkItem' href="#"><Chevron/> </a>
        </div>
      </div>

    </div>

    <div className="locations">
      <div className="locationsContent">
        <h2 className='locationsTitle'>Locations</h2>
        <p className='locationsSupTitle'>Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna, aliquet non 
          nisl sit amet.</p>
      </div>

      <div className="locationsMenu">
        <div className="locationsMenuList">
          <div className="locationsMenuItem">
            <h2 className='locationsText'>San Francisco, CA</h2>
            <div className='locationsView'>
            <a className='locationsSupText' href="#">View Properties </a>
              <div className='locationsIcon'> <Chevron/></div>  
            </div>
          </div>
          <div className="locationsMenuItem">
            <h2 className='locationsText'>Los Angeles, CA</h2>
            <div className='locationsView'>
            <a className='locationsSupText' href="#">View Properties </a>
              <div className='locationsIcon'> <Chevron/></div>  
            </div>
          </div>
          <div className="locationsMenuItem">
            <h2 className='locationsText'>San Diego, CA</h2>
            <div className='locationsView'>
            <a className='locationsSupText' href="#">View Properties </a>
              <div className='locationsIcon'> <Chevron/></div>  
            </div>
          </div>
        </div>
        
      <div className="locationsMenuList">
          <div className="locationsMenuItem">
            <h2 className='locationsText'>New York, NY</h2>
            <div className='locationsView'>
            <a className='locationsSupText' href="#">View Properties </a>
              <div className='locationsIcon'> <Chevron/></div>  
            </div>
          </div>
          <div className="locationsMenuItem">
            <h2 className='locationsText'>Las Vegas, NV</h2>
            <div className='locationsView'>
            <a className='locationsSupText' href="#">View Properties </a>
              <div className='locationsIcon'> <Chevron/></div>  
            </div>
          </div>
          <div className="locationsMenuItem">
            <h2 className='locationsText'>Miami, FL</h2>
            <div className='locationsView'>
            <a className='locationsSupText' href="#">View Properties </a>
              <div className='locationsIcon'> <Chevron/></div>  
            </div>
          </div>
      </div>
      </div>

      <div className="locationsLinkView">
        <div>
          <Button
            title="Explore properties"
            size="big"
            variant="gray"
          />
        </div>
        <div className='locationsLink'>
          <a className='locationsItem' href="#">Contact agent</a>
          <a className='locationsItem' href="#"><Chevron/></a>
        </div>
      </div>

    </div>

     <div className="priority">
      <div className='priorityIcon'>
         <Family/>
      </div>
      <div className='priorityContent'>
        <h2 className='priorityTitle'>Families are our priority</h2>
        <p className='prioritySupTitle'>Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, 
          placerat vel arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.</p>
      </div>
       <div className='priorityButton'>
        <Button
          title="Get started"
          size="big"
          variant="orange"
        />
       </div>
    </div>

    <div className="rate">
      <div className="rateContent">
        <h2 className='rateTitle'>What customers say</h2>
        <p className='rateSupTitle'>Faucibus orci luctus et ultrices posuere cubilia curae.</p>
      </div>
      <div className='rateMenu'>

      <div className="rateMenuList">
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
        <p className='rateText'>"Aliquam erat volutpat. Nulla pretium nec 
          urna et convallis. Ut varius mi lacus, nec 
          molestie libero ultricies nec. Aenean 
          lacinia dui elit, ut gravida quam."</p>

          <Cabinet
            icon="./Images/micheal.svg"
            title="Michael Webb"
            supTitle="Customer"
          />
      </div>

        <div className="rateMenuList">
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
              <p className='rateText'>
              "Class aptent taciti sociosqu ad litora 
              torquent per conubia nostra, per inceptos 
              himenaeos. Morbi pretium iaculis ultricies. 
              Aenean in leo vitae tortor."
              </p>

          <Cabinet
            icon="./Images/anber.svg"
            title="Amber Keene"
            supTitle="Customer"
          />
        </div>

        <div className="rateMenuList">
          <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
          </div>
              <p className='rateText'>
              "Condimentum viverra orci. Pellentesque suscipit 
              odio nisl, non ultricies purus mattis eget. In placerat, 
              lorem a sodales ullamcorper, eros nibh laoreet nisl."
              </p>

          <Cabinet
            icon="./Images/sarah.svg"
            title="Sarah Tarleton"
            supTitle="Customer"
          />
        </div>

      </div>
      
    </div>

    
    <div className='blog'>
      <div className='blogInfo'>
      <div className='blogContent'>
        <Badge
          title="Blog"
          size="big"
          variant="gray"
        />
        <div className='blogText'>
          <h2 className='blogTitle'>Latest posts</h2>
          <p className='blogSupTitle'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. 
            Praesent efficitur nibh massa morbi sagittis ornare dui in ornare.</p>
        </div>
      </div>
      <div className="blogView">
        <Button
          title="View all"
          size="big"
          variant="gray"
        />
      </div>
      </div>
      


      <div className='blogMenu'>

        <div className="blogMenuList">
          <img src="./Images/house.png" alt="error" />
          <div className='blogMenuContent'>
            <div className='blogMenuItem'>
              <Badge
                title="Trends"
                size="small"
                variant="pink"
              />
              <p className='blogMenuText'>May 10, 2022</p>
            </div>
          <div className='blogMenuInfo'>
            <h2 className='blogMenuTitle'>The 9 best homes in New York</h2>
            <p className='blogMenuSupTitle'>Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.</p>
          </div>
          <div className='blogMenuRead'>
            <a className='blogMenuLink' href="">Read more</a>
            <div className='blogMenuIcon'><Chevron/></div>
          </div>
          </div>

        </div>

        <div className="blogMenuList">
          <img src="./Images/diego.png" alt="error" />
          <div className='blogMenuContent'>
            <div className='blogMenuItem'>
              <Badge
                title="DIY"
                size="small"
                variant="pink"
              />
              <p className='blogMenuText'>May 10, 2022</p>
            </div>
          <div className='blogMenuInfo'>
            <h2 className='blogMenuTitle'>The 9 best homes in New York</h2>
            <p className='blogMenuSupTitle'>Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.</p>
          </div>
          <div className='blogMenuRead'>
            <a className='blogMenuLink' href="">Read more</a>
            <div className='blogMenuIcon'><Chevron/></div>
          </div>
          </div>

        </div>

        <div className="blogMenuList">
          <img src="./Images/newyork.png" alt="error" />
          <div className='blogMenuContent'>
            <div className='blogMenuItem'>
              <Badge
                title="DIY"
                size="small"
                variant="pink"
              />
              <p className='blogMenuText'>May 10, 2022</p>
            </div>
          <div className='blogMenuInfo'>
            <h2 className='blogMenuTitle'>The 9 best homes in New York</h2>
            <p className='blogMenuSupTitle'>Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.</p>
          </div>
          <div className='blogMenuRead'>
            <a className='blogMenuLink' href="">Read more</a>
            <div className='blogMenuIcon'><Chevron/></div>
          </div>
          </div>

        </div>


      </div>
    </div>

    <footer className='footer'>
      <a href="#">
        <img src="./Images/logo.svg" alt="error" />
      </a>
        <div className='footerMenu'>
          <div className='footerMenuList'>
            <a className='footerMenuLink' href="#">Pages</a>
            <a className='footerMenuLink' href="#">Home</a>
            <a className='footerMenuLink' href="#">About</a>
            <a className='footerMenuLink' href="#">Blog</a>
            <a className='footerMenuLink' href="#">Agents</a>
            <a className='footerMenuLink' href="#">Contact</a>
            <a className='footerMenuLink' href="#">FAQs</a>
            <a className='footerMenuLink' href="#">Properties</a>
          </div>

          <div className='footerMenuList'>
            <a className='footerMenuLink' href="#">CMS Pages</a>
            <a className='footerMenuLink' href="#">Property</a>
            <a className='footerMenuLink' href="#">Property Single</a>
            <a className='footerMenuLink' href="#">Blog Categories</a>
            <a className='footerMenuLink' href="#">Blog Single</a>
            <a className='footerMenuLink' href="#">Agent Single</a>
          </div>

          <div className='footerMenuList'>
            <a className='footerMenuLink' href="#">Utility Pages</a>
            <a className='footerMenuLink' href="#">Style Guide</a>
            <a className='footerMenuLink' href="#">Changelog</a>
            <a className='footerMenuLink' href="#">Licenses</a>
            <a className='footerMenuLink' href="#">404</a>
            <a className='footerMenuLink' href="#">Password</a>
            <a className='footerMenuLink' href="#">Search</a>
          </div>
        </div>

        <div className="footerContent">
          <div className="footerText">
            <h2 className='footerTitle'>Subscribe</h2>
            <p className='footerSupTitle'>Join our newsletter to stay up to date on features and releases.</p>
          </div>
          <div className='footerEnter'>
            <input className='footerInput' type="text" placeholder='Enter your email' />
            <Button
              title="Subscribe"
              variant="orange"
            />
          </div>
          <div className='footerInfo'>
            <p className='footerInfoText'>By subscribing you agree to with our</p>
            <p className='footerInfoText'>Privacy Policy</p>
          </div>
        </div>
    </footer>

    <div className="network">
      <div className="networkText">
        <p className='networkTitle'>© Realco by  Minimal Square</p>
      </div>
      <div className="networkIcons">
        <Facebook/>
        <Instagramm/>
        <Twitter/>
        <In/>
      </div>
    </div>



    </div>
  );
}

export default App;
