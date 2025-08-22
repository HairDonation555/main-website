// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState, useEffect } from "react";

// const Anims = ({
//   children,
//   inAnimation,
//   outAnimation,
//   delay = 0,
//   duration = 0.8,
//   id = "anim" // Add a unique id prop for key; make it required if needed
// }) => {
//   const shouldReduceMotion = useReducedMotion();
//   const { ref, inView } = useInView({ threshold: 0 }); // Changed to 0 for stricter detection
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     requestAnimationFrame(() => {
//       setIsVisible(inView);
//     });
//   }, [inView]);

//   const variants = {
//     fadeIn: { opacity: 1, transition: { duration, delay } },
//     fadeOut: { opacity: 0, transition: { duration, delay } },
//     slideInLeft: { x: "0%", opacity: 1, transition: { duration, delay } },
//     slideOutLeft: { x: "-10%", opacity: 0, transition: { duration, delay } },
//     slideInRight: { x: "0%", opacity: 1, transition: { duration, delay } },
//     slideOutRight: { x: "10%", opacity: 0, transition: { duration, delay } },
//     slideInUp: { y: "0%", opacity: 1, transition: { duration, delay } },
//     slideOutDown: { y: "10%", opacity: 0, transition: { duration, delay } },
//     scaleIn: { scale: 1, opacity: 1, transition: { duration, delay } },
//     scaleOut: { scale: 1.05, opacity: 0, transition: { duration, delay } },
//   };

//   return (
//     <motion.div
//       key={id} // ✅ Adds unique key to prevent reconciliation blinks
//       ref={ref}
//       variants={variants}
//       initial={variants[outAnimation]} // ✅ Explicit out state on mount
//       animate={
//         shouldReduceMotion
//           ? variants[inAnimation] // Skip animation if reduced motion
//           : isVisible
//           ? variants[inAnimation]
//           : variants[outAnimation]
//       }
//       style={{
//         willChange: "transform, opacity", // Existing GPU hint
//         WebkitBackfaceVisibility: "hidden", // Existing Safari fix
//         WebkitTransform: "translateZ(0)", // Existing Safari fix
//         WebkitTransformStyle: "preserve-3d", // ✅ Extra for Safari 3D compositing
//         transformStyle: "preserve-3d", // Non-prefixed version
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default Anims;