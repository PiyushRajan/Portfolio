import css from '../app/assets/svg/skills/css.svg';
import git from '../app/assets/svg/skills/git.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import redux from "../app/assets/svg/skills/redux.svg"
import nodejs from "../app/assets/svg/skills/nodejs.svg"
import express from "../app/assets/svg/skills/express.svg"
import chakraui from "../app/assets/svg/skills/chakraui.svg"

export const skillsImage = (skill :any) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    
    case 'html':
      return html;

    case 'css':
      return css;

    case 'javascript':
      return javascript;

    case 'typescript':
      return typescript;

    case 'react':
      return react;

    case 'next js':
      return nextJS;

    case 'redux toolkit':
      return redux;

    case 'graphql':
      return graphql;

    case 'material ui':
      return materialui;

    case 'chakra ui':
      return chakraui;

    case 'tailwind':
      return tailwind;

    case 'node js':
      return nodejs;

    case 'express':
      return express;
   
    case 'mongodb':
      return mongoDB;

    case 'git':
      return git;
    
    default:
      break;
  }
}
