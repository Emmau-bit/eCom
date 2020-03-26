import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from 'mdbreact';
import Menu from './Menu';
import img1 from '../img/ap1.jpg';
import img2 from '../img/x3.jpg';
import img3 from '../img/x1.jpg';
import img4 from '../img/ap2.jpg';
import img5 from '../img/cel3.jpg';
import img6 from '../img/cel5.jpg';
import img7 from '../img/ga3.jpg';
import img8 from '../img/nok2.jpg';
import img9 from '../img/nok3.jpg';

import '../styles.css';

const Layout = ({
  title = 'Title',
  description = 'Description',
  className,
  children
}) => (
  <div>
    <Menu />
    <div id='h' className='container h-50 mt-5 mb-5'>
      <MDBCarousel
        activeItem={1}
        length={9}
        showControls={true}
        showIndicators={false}
        className='z-depth-1'
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId='1'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail '
                src={img2}
                alt='First slide'
              />
              <MDBMask overlay='black-light' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <strong>
                  {' '}
                  <h3 id='p-all' className='h3-responsive display-5'>
                    {title}
                  </h3>{' '}
                </strong>
                <div className=''>
                  <p id='p-all'>{description}</p>
                </div>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='2'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail'
                src={img3}
                alt='Second slide'
              />
              <MDBMask overlay='black-strong' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <h3 id='p-all' className='h3-responsive display-5'>
                  {title}
                </h3>
                <p id='p-all'>{description}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='3'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail'
                src={img1}
                alt='Third slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <h3 id='p-all' className='h3-responsive display-5'>
                  {title}
                </h3>
                <p id='p-all'>{description}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='4'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail'
                src={img4}
                alt='fourth slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <h3 id='p-all' className='h3-responsive display-5'>
                  {title}
                </h3>
                <p id='p-all'>{description}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='5'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail'
                src={img5}
                alt='fith slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <h3 id='p-all' className='h3-responsive display-5'>
                  {title}
                </h3>
                <p id='p-all'>{description}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='6'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail'
                src={img6}
                alt='sixth slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <h3 id='p-all' className='h3-responsive display-5'>
                  {title}
                </h3>
                <p id='p-all'>{description}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='7'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail'
                src={img7}
                alt='seventh slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <h3 id='p-all' className='h3-responsive display-5'>
                  {title}
                </h3>
                <p id='p-all'>{description}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='8'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail'
                src={img8}
                alt='eighth slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <h3 id='p-all' className='h3-responsive display-5'>
                  {title}
                </h3>
                <p id='p-all'>{description}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='9'>
            <MDBView>
              <img
                className='d-block  m-auto img-thumbnail'
                src={img9}
                alt='nineth slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <div id='m'>
                <h3 id='p-all' className='h3-responsive display-5'>
                  {title}
                </h3>
                <p id='p-all'>{description}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
