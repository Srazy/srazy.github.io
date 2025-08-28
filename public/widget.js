import{c as r,j as t,A as s}from"./assets/app-B9KrH7XT.js";const o="widget",a=`/**
 * Swiper 11.2.10
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 28, 2025
 */

/* FONT_START */
@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, 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');
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}
:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}
.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
  touch-action: pan-y;
}
.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-3d {
  perspective: 1200px;
}
.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: '';
  flex-shrink: 0;
  order: 9999;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}
/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */
`,p=`* {
  box-sizing: border-box;
  scrollbar-width: none;
}

a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
}

@font-face {
  font-family: "Exo 2";
  src: url("./public/fonts/Exo2-Regular.ttf") format("truetype");
  font-display: swap;
  font-weight: 400;
}
@font-face {
  font-family: "Exo 2";
  src: url("./public/fonts/Exo2-Medium.ttf") format("truetype");
  font-display: swap;
  font-weight: 500;
}
@font-face {
  font-family: "Exo 2";
  src: url("./public/fonts/Exo2-SemiBold.ttf") format("truetype");
  font-display: swap;
  font-weight: 600;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a,
p,
span,
button,
div,
input,
textarea,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Exo 2", sans-serif;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-8 {
  gap: 8px;
}

.flex-direction-column {
  flex-direction: column;
}

.flex-direction-row {
  flex-direction: row;
}

.flex-direction-column-reverse {
  flex-direction: column-reverse;
}

.flex-direction-row-reverse {
  flex-direction: row-reverse;
}

.align-center {
  align-items: center;
}

.align-flex-start {
  align-items: flex-start;
}

.align-flex-end {
  align-items: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-flex-start {
  justify-content: flex-start;
}

.justify-flex-end {
  justify-content: flex-end;
}

.justify-space-between {
  justify-content: space-between;
}

.justify-space-around {
  justify-content: space-around;
}

.flex-0 {
  flex: 0;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.flex-grow-0 {
  flex-grow: 0;
}

.flex-1 {
  flex: 1;
}

.flex-shrink-1 {
  flex-shrink: 1;
}

.flex-grow-1 {
  flex-grow: 1;
}

.flex-2 {
  flex: 2;
}

.flex-shrink-2 {
  flex-shrink: 2;
}

.flex-grow-2 {
  flex-grow: 2;
}

.flex-3 {
  flex: 3;
}

.flex-shrink-3 {
  flex-shrink: 3;
}

.flex-grow-3 {
  flex-grow: 3;
}

.flex-4 {
  flex: 4;
}

.flex-shrink-4 {
  flex-shrink: 4;
}

.flex-grow-4 {
  flex-grow: 4;
}

.flex-5 {
  flex: 5;
}

.flex-shrink-5 {
  flex-shrink: 5;
}

.flex-grow-5 {
  flex-grow: 5;
}

.flex-6 {
  flex: 6;
}

.flex-shrink-6 {
  flex-shrink: 6;
}

.flex-grow-6 {
  flex-grow: 6;
}

.flex-7 {
  flex: 7;
}

.flex-shrink-7 {
  flex-shrink: 7;
}

.flex-grow-7 {
  flex-grow: 7;
}

.flex-8 {
  flex: 8;
}

.flex-shrink-8 {
  flex-shrink: 8;
}

.flex-grow-8 {
  flex-grow: 8;
}

.flex-9 {
  flex: 9;
}

.flex-shrink-9 {
  flex-shrink: 9;
}

.flex-grow-9 {
  flex-grow: 9;
}

.flex-10 {
  flex: 10;
}

.flex-shrink-10 {
  flex-shrink: 10;
}

.flex-grow-10 {
  flex-grow: 10;
}

.flex-11 {
  flex: 11;
}

.flex-shrink-11 {
  flex-shrink: 11;
}

.flex-grow-11 {
  flex-grow: 11;
}

.flex-12 {
  flex: 12;
}

.flex-shrink-12 {
  flex-shrink: 12;
}

.flex-grow-12 {
  flex-grow: 12;
}

.text-weight-400 {
  font-weight: 400;
}
.text-weight-500 {
  font-weight: 500;
}
.text-weight-600 {
  font-weight: 600;
}
.text-size-12 {
  font-size: 12px;
}
.text-size-14 {
  font-size: 14px;
}
.text-size-16 {
  font-size: 16px;
}
.text-size-18 {
  font-size: 18px;
}
.text-lineHeight-16 {
  line-height: 16px;
}
.text-lineHeight-20 {
  line-height: 20px;
}
.text-lineHeight-24 {
  line-height: 24px;
}
.text-lineHeight-28 {
  line-height: 28px;
}
.text--ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text--underline {
  text-decoration: underline;
}
.text--nowrap {
  white-space: nowrap;
}
.text--left {
  text-align: left;
}
.text--center {
  text-align: center;
}
.text--right {
  text-align: right;
}
.text-primary-body14 {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.text-control16 {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.elevation-1 {
  transition: box-shadow 0.2s;
  box-shadow: 0px 1px 2px 0px rgba(19, 62, 146, 0.1), 0px 0px 1px 0px rgba(19, 62, 146, 0.2);
}
.elevation-1_hover:hover {
  box-shadow: 0px 4px 16px 0px rgba(19, 62, 146, 0.15), 0px 0px 1px 0px rgba(19, 62, 146, 0.1);
}

.color-text-tertiary {
  color: #7d8ba6;
}

.link {
  cursor: pointer;
  text-decoration: none;
  color: #0572e8;
  outline-color: #03448a;
}
.link:hover {
  color: #03448a;
}
.link:active {
  color: #070b14;
}
.link-with-icon {
  display: flex;
  align-items: center;
  gap: 4px;
}

.best-vacancy-swiper {
  display: flex;
  padding: 24px 2px 24px;
}
@media (max-width: 1200px) {
  .best-vacancy-swiper {
    margin-right: 24px;
  }
}
@media (max-width: 768px) {
  .best-vacancy-swiper {
    margin-right: 16px;
  }
}
.best-vacancy-swiper_wrapper {
  height: auto;
}
.best-vacancy-swiper_heading {
  margin-top: 64px;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
}
@media (max-width: 768px) {
  .best-vacancy-swiper_heading {
    margin-top: 32px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
}
.best-vacancy-swiper_pagination {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 0;
}
.best-vacancy-card {
  width: 384px;
  border-radius: 12px;
  background: #f1f8ff;
  padding: 24px;
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  .best-vacancy-card {
    width: 328px;
  }
}
.best-vacancy-card_content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 0;
}
.best-vacancy-card_content_caption {
  color: #0572e8;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  word-break: break-word;
  display: -webkit-box;
  line-clamp: 4;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.best-vacancy-card_content_salary {
  color: #070b14;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}
.best-vacancy-card_content_location {
  display: flex;
  align-items: center;
  gap: 8px;
}
.best-vacancy-card_content_profession {
  color: #7d8ba6;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.best-vacancy-card_content-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  flex: 1;
}

.chip {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  width: fit-content;
  cursor: pointer;
  transition: background-color 200ms, color 200ms, border 200ms;
}
.chip--24 {
  padding: 2px 4px;
  border-radius: 4px;
  height: 24px;
}
.chip--24_text {
  padding: 0 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}
.chip--32 {
  padding: 4px;
  border-radius: 8px;
  height: 32px;
}
.chip--32_text {
  padding: 0 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}
.chip--40 {
  padding: 8px;
  border-radius: 8px;
  height: 40px;
}
.chip--40_text {
  padding: 0 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
}
.chip--succes {
  color: #16a163;
}
.chip--succes-filled {
  background: #ebf7ed;
}
.chip--succes-filled:focus-visible {
  background: #c7ebd1;
}
.chip--succes-filled-hover:hover {
  background: #c7ebd1;
}
.chip--succes-filled-selected {
  color: #fff;
  background: #16a163;
}
.chip--succes-outlined {
  background: none;
  border: 1px solid #ebf7ed;
}
.chip--succes-outlined:focus-visible {
  border-color: #c7ebd1;
}
.chip--succes-outlined-hover:hover {
  border-color: #c7ebd1;
}
.chip--succes-outlined-selected {
  border-color: #16a163;
  background: #ebf7ed;
}

/*# sourceMappingURL=index.css.map */
`,n=document.getElementById(o);if(n){const e=n.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=`
    ${a}
    ${p}
    /* Дополнительные стили виджета при необходимости */
    :host {
      all: initial; /* Опционально: сброс наследуемых стилей */
      font-family: sans-serif;
    }
  `,e.appendChild(i),document.body.appendChild(n),r.createRoot(e).render(t.jsxDEV(s,{},void 0,!1,{fileName:"/Users/srazy/Projects/react-widget/src/widget.tsx",lineNumber:27,columnNumber:40},void 0))}
