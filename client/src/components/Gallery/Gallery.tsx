import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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

  projects: any;
  scrollTo: (e: any, e2?: ScrollBehavior | undefined) => void;
}

type params = {
  id: string;
};

export const Gallery: React.FC<Props> = ({
  projects,

  toggleGallery,
  setToggleGallery,
  scrollTo,
  galRef,
}) => {
  const [counter, setCounter] = useState<number>(0);
  const [maxItems, setMaxItems] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  let { id } = useParams<params>();

  useEffect(
    function () {
      if (projects && projects[Number(id)]) {
        if (projects[Number(id)].pics) {
          setMaxItems(projects[Number(id)].pics.length - 1);
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

  useEffect(function () {
    setLoaded(true);
  }, []);

  return (
    <GalleryContainer>
      {!toggleGallery && (
        <GalleryPic
          src={
            (loaded && projects[Number(id)].pics[counter].pic) ||
            "./loading.gif"
          }
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
          onLoad={(e) => {
            setLoaded(true);
          }}
        ></GalleryPic>
      )}
      {toggleGallery && (
        <GalleryPicWide
          src={
            (loaded && projects[Number(id)].pics[counter].pic) ||
            "./loading.gif"
          }
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
          onLoad={(e) => {
            setLoaded(true);
          }}
        ></GalleryPicWide>
      )}

      {projects[Number(id)].pics.length != 1 && (
        <GalleryControls>
          <GalleryNumbers>
            {counter + 1}/{projects[Number(id)].pics.length}
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
            src="./zoom.png"
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
          {projects[Number(id)].url && Number(id) != 0 && (
            <GalleryLink
              href={projects[Number(id)].url}
              target="_blank"
              title="Open Project"
            >
              <WebLinkImg src="./linkPreview.png"></WebLinkImg>
            </GalleryLink>
          )}
          {projects[Number(id)].url && Number(id) == 0 && (
            <Link to="/" title="Open Project">
              <WebLinkImg src="./linkPreview.png"></WebLinkImg>
            </Link>
          )}
          {projects[Number(id)].git && (
            <GalleryLink
              href={projects[Number(id)].git}
              target="_blank"
              title="Check Code"
            >
              <GitLinkImg src="./git.png"></GitLinkImg>
            </GalleryLink>
          )}
        </GalleryLinksBox>
      )}
    </GalleryContainer>
  );
};
