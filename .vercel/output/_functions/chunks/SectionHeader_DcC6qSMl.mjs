import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { b as cn } from './Layout_CMQicny_.mjs';

const motionComponents = motion;
function MotionPreset({
  ref,
  children,
  className,
  component = "div",
  transition = { type: "spring", stiffness: 200, damping: 20 },
  delay = 0,
  inView = true,
  inViewMargin = "0px",
  inViewOnce = true,
  blur = false,
  slide = false,
  fade = false,
  zoom = false,
  motionProps = {}
}) {
  const localRef = React.useRef(null);
  React.useImperativeHandle(ref, () => localRef.current);
  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin
  });
  const isInView = !inView || inViewResult;
  const hiddenVariant = {};
  const visibleVariant = {};
  if (blur) {
    hiddenVariant.filter = blur === true ? "blur(10px)" : `blur(${blur})`;
    visibleVariant.filter = "blur(0px)";
  }
  if (slide) {
    const offset = slide === true ? 100 : slide.offset ?? 100;
    const direction = slide === true ? "left" : slide.direction ?? "left";
    const axis = direction === "up" || direction === "down" ? "y" : "x";
    hiddenVariant[axis] = direction === "left" || direction === "up" ? -offset : offset;
    visibleVariant[axis] = 0;
  }
  if (fade) {
    hiddenVariant.opacity = fade === true ? 0 : fade.initialOpacity ?? 0;
    visibleVariant.opacity = fade === true ? 1 : fade.opacity ?? 1;
  }
  if (zoom) {
    hiddenVariant.scale = zoom === true ? 0.5 : zoom.initialScale ?? 0.5;
    visibleVariant.scale = zoom === true ? 1 : zoom.scale ?? 1;
  }
  const MotionComponent = motionComponents[component] || motion.div;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
    MotionComponent,
    {
      ref: localRef,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      exit: "hidden",
      variants: {
        hidden: hiddenVariant,
        visible: visibleVariant
      },
      transition: {
        ...transition,
        delay: (transition?.delay ?? 0) + delay
      },
      className,
      ...motionProps,
      children
    }
  ) });
}

const SectionHeader = ({
  eyebrow,
  title,
  highlightedWord,
  description,
  align = "center",
  variant = "light",
  className
}) => {
  const isCenter = align === "center";
  const isDark = variant === "dark";
  const renderTitle = () => {
    if (!highlightedWord) return title;
    const parts = title.split(highlightedWord);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      parts[0],
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: highlightedWord }),
      parts[1]
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: cn(
    "space-y-4 w-full",
    isCenter ? "text-center" : "text-left",
    className
  ), children: [
    eyebrow && /* @__PURE__ */ jsx(MotionPreset, { fade: true, slide: { direction: "up", offset: 30 }, delay: 0.2, transition: { duration: 0.6 }, children: /* @__PURE__ */ jsx("p", { className: "text-primary text-sm font-nav tracking-widest uppercase", children: eyebrow }) }),
    /* @__PURE__ */ jsx(MotionPreset, { fade: true, slide: { direction: "up", offset: 40 }, delay: 0.4, transition: { duration: 0.8 }, children: /* @__PURE__ */ jsx("h2", { className: cn(
      "relative z-1 inline-block",
      isDark ? "text-white" : "text-black"
    ), children: renderTitle() }) }),
    description && /* @__PURE__ */ jsx(MotionPreset, { fade: true, slide: { direction: "up", offset: 30 }, delay: 0.6, transition: { duration: 0.7 }, children: /* @__PURE__ */ jsx("p", { className: cn(
      "text-base font-normal leading-relaxed max-w-2xl",
      isDark ? "text-white/90" : "text-black",
      isCenter && "mx-auto"
    ), children: description }) })
  ] });
};

export { MotionPreset as M, SectionHeader as S };
