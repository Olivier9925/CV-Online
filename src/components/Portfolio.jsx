import React, { useState } from 'react';
import {
        Carousel,
        CarouselItem,
        CarouselControl,
        CarouselIndicators,
        CarouselCaption
} from 'reactstrap';

const items = [
        {
                src: 'http://olivier.allard-jacquin.com/assets/projet2.png',
                altText: '',
                caption: 'http://www.github.com'
        }
];

const Portfolio = (props) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);

        const next = () => {
                if (animating) return;
                const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
                setActiveIndex(nextIndex);
        }

        const previous = () => {
                if (animating) return;
                const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
                setActiveIndex(nextIndex);
        }

        const goToIndex = (newIndex) => {
                if (animating) return;
                setActiveIndex(newIndex);
        }
        const goToProject = (index) => {
                switch (index) {
                        case 0:
                                const lien = "http://github.com"
                                console.log(lien);

                }
        }

        const slides = items.map((item) => {
                return (
                        <CarouselItem
                                onExiting={() => setAnimating(true)}
                                onExited={() => setAnimating(false)}
                                key={item.src}
                        >
                                <img src={item.src} alt={item.altText} onClick={() => goToProject(activeIndex)} />
                                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                        </CarouselItem>
                );
        });

        return (
                <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
        );
}

export default Portfolio;