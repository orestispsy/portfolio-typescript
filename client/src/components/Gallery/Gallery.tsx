import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  GalleryContainer,
  GalleryControls,
  GalleryNumbers,
  GalleryArrow,
  InputRange,
  GalleryZoom,
  GalleryLinksBox,
  GalleryLink,
  WebLinkImg,
  GitLinkImg,
  GalleryPic,
  GalleryPicWide,
} from "./styled/Gallery.styled";

interface Props {
  toggleGallery: boolean;
  setToggleGallery: (e: any) => void;
  galRef: React.MutableRefObject<HTMLDivElement | null> | null;
  selectedProject: number;
  projects: any;
  scrollTo: (e: any, e2?: ScrollBehavior | undefined) => void;
}

export const Gallery: React.FC<Props> = ({
  projects,
  selectedProject,
  toggleGallery,
  setToggleGallery,
  scrollTo,
  galRef,
}) => {
  const [counter, setCounter] = useState<number>(0);
  const [maxItems, setMaxItems] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(
    function () {
      if (projects && selectedProject) {
        if (projects[selectedProject].pics) {
          setMaxItems(projects[selectedProject].pics.length - 1);
        }
      }
    },
    [maxItems]
  );

  useEffect(
    function () {
      setLoaded(false);
    },
    [counter]
  );

  return (
    <GalleryContainer>
      {!toggleGallery && (
        <GalleryPic
          src={
            (loaded && projects[selectedProject].pics[counter].pic) ||
            "/loading.gif"
          }
          onClick={(e) => {
            setToggleGallery(!toggleGallery);
            setTimeout(() => {
              if (galRef?.current) {
                scrollTo(galRef.current.offsetTop, "smooth");
              }
            }, 700);
          }}
          onLoad={(e) => {
            setLoaded(true);
          }}
        ></GalleryPic>
      )}
      {toggleGallery && (
        <GalleryPicWide
          src={
            (loaded && projects[selectedProject].pics[counter].pic) ||
            "/loading.gif"
          }
          onClick={(e) => setToggleGallery(!toggleGallery)}
          onLoad={(e) => {
            setLoaded(true);
          }}
        ></GalleryPicWide>
      )}

      {projects[selectedProject].pics.length != 1 && (
        <GalleryControls>
          <GalleryNumbers>
            {counter + 1}/{projects[selectedProject].pics.length}
          </GalleryNumbers>
          <GalleryArrow
            title="Previous"
            onClick={() => {
              if (counter > 0) {
                setCounter(counter - 1);
              } else {
                return;
              }
            }}
          >
            ◄
          </GalleryArrow>
          <InputRange
            value={counter}
            type="range"
            min={0}
            max={maxItems}
            onChange={(e) => {
              setCounter(parseInt(e.target.value));
            }}
          ></InputRange>
          <GalleryArrow
            title="Next"
            onClick={() => {
              if (counter < maxItems || counter == 0) {
                setCounter(counter + 1);
              }
            }}
          >
            ►
          </GalleryArrow>

          <GalleryZoom
            src="/zoom.png"
            title="Zoom"
            onClick={() => {
              if (!toggleGallery) {
                setToggleGallery(true);
                setTimeout(() => {
                  if (galRef?.current) {
                    scrollTo(galRef.current.offsetTop, "smooth");
                  }
                }, 700);
              } else {
                setToggleGallery(false);
              }
            }}
          ></GalleryZoom>
        </GalleryControls>
      )}

      {!toggleGallery && (
        <GalleryLinksBox>
          {projects[selectedProject].url && selectedProject != 0 && (
            <GalleryLink
              href={projects[selectedProject].url}
              target="_blank"
              title="Open Project"
            >
              <WebLinkImg src="/linkPreview.png"></WebLinkImg>
            </GalleryLink>
          )}
          {projects[selectedProject].url && selectedProject == 0 && (
            <Link to="/" title="Open Project">
              <WebLinkImg src="/linkPreview.png"></WebLinkImg>
            </Link>
          )}
          {projects[selectedProject].git && (
            <GalleryLink
              href={projects[selectedProject].git}
              target="_blank"
              title="Check Code"
            >
              <GitLinkImg src="/git.png"></GitLinkImg>
            </GalleryLink>
          )}
        </GalleryLinksBox>
      )}
    </GalleryContainer>
  );
};
