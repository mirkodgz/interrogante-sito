import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.5VBTLnzS.js";import{m as i}from"./proxy.kc_TDvkl.js";const r=[{text:"TRANSFORMA",color:"bg-secondary",direction:-1},{text:"LA ENSEÑANZA",color:"bg-primary",direction:1},{text:"DESPIERTA",color:"bg-black",direction:-1},{text:"LA CREATIVIDAD.",color:"bg-primary",direction:1}];function l(){return e.jsx("section",{className:"py-24 bg-[#f8f8f8] overflow-hidden flex flex-col items-center",children:e.jsx("div",{className:"w-full max-w-[650px] flex flex-col gap-2 px-6",children:r.map((t,o)=>e.jsx(i.div,{initial:{x:t.direction*100,opacity:0},whileInView:{x:0,opacity:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,delay:o*.1,ease:[.215,.61,.355,1]},className:`
              ${t.color} 
              py-[10px] 
              w-full 
              flex 
              items-center 
              justify-center 
              shadow-lg
              ${o%2===0?"-rotate-2":"rotate-2"}
            `,children:e.jsx("span",{className:"text-white font-nav text-[44px] font-[700] tracking-[3px] leading-none uppercase",children:t.text})},o))})})}export{l as default};
