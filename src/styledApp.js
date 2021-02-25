import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  background: white;
  z-index:-1;
  max-width: 360px;
  height: 360px; 
  margin: auto;
  margin-top: 100px;
  border-radius: 50%;
  border: solid black 36px;
  position: relative;
  box-shadow:  #00F 0px 0px 100px 30px;

  .clock{
    display: flex;
    width: 100%;
    height: 97%;
    border-radius: 100%;
    border: dashed black 6px;
    box-shadow:  #000 0px 0px 20px 10px;

    .circle{
      width: 10%;
      height: 10%;
      border-radius: 50%;
      position: absolute;
      top: 45%;
      left: 45%;
      box-shadow: #000 0px 10px 100px 10px;
    }
    .circle2{
      width: 390px;
      height: 390px;
      border-radius: 50%;
      position: absolute;
      top:-35px;
      left:-35px;
      border: solid white 20px;
      z-index: -1;
    } 
    .base{
      width: 5%;
      height: 5%;
      background: black;
      border-radius: 50%;
      margin-top: 47.5%;
      margin-left: 47.5%;
      z-index: 1;
    }
    .pointerSeconds{
      width: 45%;
      height: 1%;
      background: red;
      top: 49.5%;
      left: 50%;
      animation: clock infinite;
      animation-timing-function: linear;
      animation-duration: 60s;
      position: absolute;
      transform-origin: 0%;
    }
    @keyframes clock {
      0% {transform: rotate(-90deg);}
    100% {transform: rotate(270deg);}
    }
    .pointerHours{
      width: 30%;
      height: 2%;
      background: black;
      top: 49%;
      left: 50%;
      position: absolute;
      animation: clock infinite;
      animation-timing-function: linear;
      animation-duration: 43200s;
      transform-origin: 0%;
      border-radius: 0px 15px 15px 0px;    
    }
    .pointerMinuts{
      width: 46%;
      height: 2%;
      background: #363636;
      top: 49%;
      left: 50%;
      position: absolute;
      animation: clock infinite;
      animation-timing-function: linear;
      animation-duration: 3600s;
      transform-origin: 0%;
      border-radius: 0px 15px 15px 0px;
    }
    .square{
      width:10px;
      height: 10px;
      background: black;
      margin-top: -10px;
      margin-left: -15px;
    }
    .square2{
      width:10px;
      height: 10px;
      background: black;
      margin-top: 349px;
      margin-left: -10px;
    }
    .t12{
      display:flex;
      position: absolute;
      left: 43%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t1{
      display:flex;
      position: absolute;
      left: 69%;
      top: 8%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t2{
      display:flex;
      position: absolute;
      left: 84%;
      top: 24%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t3{
      display:flex;
      position: absolute;
      left: 90%;
      top: 44%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t4{
      display:flex;
      position: absolute;
      left: 84%;
      top: 62%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t5{
      display:flex;
      position: absolute;
      left: 70%;
      top: 79%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t6{
      display:flex;
      position: absolute;
      left: 47%;
      top: 85%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t7{
      display:flex;
      position: absolute;
      left: 23%;
      top: 78%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t8{
      display:flex;
      position: absolute;
      left: 9%;
      top: 63%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t9{
      display:flex;
      position: absolute;
      left: 4%;
      top: 44%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t10{
      display:flex;
      position: absolute;
      left: 9%;
      top: 24%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }
    .t11{
      display:flex;
      position: absolute;
      left: 24%;
      top: 8%;
      z-index: -1;

      p{
        font-size: 3rem;   
      }
    }   
  }
`