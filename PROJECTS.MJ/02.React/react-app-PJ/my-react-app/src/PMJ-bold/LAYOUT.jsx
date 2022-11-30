import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Layout.css";
import "../sub_JSX"
// import "../swiper-bundle.min.js"
// 상단 가로 앨범 + 하단 로고 + 앨범에 링크 따라 움직이는 레이아웃 페이지 Route 에 상단에
// root로서 고정될 페이지

const Layout = () => {
    return (
        <React.Fragment>
            {/* 1. 상단영역 */}
            {/* <!-- 상단 pmj클릭시 상단으로 가는 버튼 --> */}
            <div calssName="coverlogotop">
                <a href="#" calssName="abtn"></a>
            </div>

            <header>
                {/* <!-- 상단 햄버거 버튼! --> */}
                <div calssName="topbtn">
                    {/* <!-- 버튼클릭시 옆으로 커지는 박스 --> */}

                    <div calssName="btntop">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                        {/* <!-- 2 4 5번 점 짂는 span --> */}
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {/* <!-- 상단 전체 박스 --> */}
                <div calssName="tbox1">
                    {/* <!-- 로그인 회원 가입  --> */}
                    <ul calssName="lm">
                        <li>
                            <a href="#" calssName="abtn login">
                                logIn
                            </a>
                        </li>
                        |
                        <li>
                            <a href="#" calssName="abtn member">
                                Sign
                            </a>
                        </li>
                    </ul>
                    {/* <!-- 로고 싸는 박스 --> */}
                    <div calssName="top">
                        {/* <!-- 상단 부분 구분하기위해 헤더태그를 붙임 --> */}
                        <header>
                            {/* <!-- 탑로고 SVG관련해서 있음 --> */}
                            <section calssName="toplogo">
                                {/* <!-- svg 커버용 박스 --> */}
                                <section calssName="coverSVG">
                                    {/* <!-- 비율유지 박스 --> */}
                                    <div>
                                        {/* <!-- SVG --> */}
                                        <div>
                                            <svg viewbox="-2 -2 300 200 ">
                                                {/* <!-- SVG객체 --> */}
                                                <path
                                                    calssName="P0 path"
                                                    d="M67.43,4.86c0.64,0.85,1.19,1.85,1.66,2.99c0.45,1.14,0.54,1.77,0.26,1.89c-0.23,0.09-0.39,0.06-0.52-0.11
                      c-0.04-0.05-0.07-0.13-0.1-0.25c-0.28-1.39-0.92-2.74-1.91-4.07c-1.56-2.06-3.65-3.38-6.27-3.95s-5.31-0.29-8.05,0.82
                      c-3.71,1.5-6.85,3.95-9.44,7.33c4.84,0.6,8.2,2.15,10.08,4.64c1.59,2.09,1.82,4.39,0.69,6.88c-1.12,2.49-3.22,4.36-6.31,5.61
                      c-1.2,0.49-2.63,0.84-4.29,1.04c-1.65,0.21-2.59,0.16-2.83-0.16c-0.03-0.12,0.02-0.21,0.16-0.26c0.11-0.05,0.33-0.07,0.65-0.07
                      c1.82,0.02,3.44-0.26,4.84-0.83c2.54-1.03,4.12-2.72,4.72-5.07c0.61-2.34,0.07-4.63-1.62-6.85c-1.45-1.92-3.68-3.24-6.7-3.99
                      c-2.84,4.62-3.91,11.16-3.22,19.61c0.42,5.11,0.22,9.01-0.62,11.69c-0.84,2.67-2.69,5.53-5.56,8.58c-3.4,3.57-6.94,6.09-10.61,7.59
                      c-3,1.22-5.87,1.73-8.62,1.52c-2.75-0.2-4.69-1.05-5.84-2.56c-0.63-0.84-0.84-1.69-0.61-2.58c0.23-0.88,0.8-1.51,1.74-1.9
                      c1.36-0.55,2.46-0.28,3.3,0.84c0.42,0.56,0.55,1.12,0.39,1.7c-0.16,0.58-0.57,1-1.24,1.28c-1.16,0.47-2.06,0.26-2.68-0.65
                      c-0.25-0.37-0.43-0.53-0.54-0.48c-0.35,0.15-0.21,0.65,0.44,1.51c1.03,1.36,2.79,2.12,5.29,2.28c2.5,0.16,5.14-0.32,7.91-1.44
                      c4.89-1.99,8.32-5.12,10.3-9.39c0.87-1.87,1.45-3.67,1.76-5.38c0.35-1.86,0.88-6.22,1.58-13.1c0.37-3.41,1.14-6.99,2.31-10.73
                      s2.42-6.6,3.74-8.55c-5.14-0.76-11.07,0.23-17.82,2.97C14.43,17.1,8.11,22.93,4.92,30.76C2.29,37.18,2.35,42.2,5.08,45.82
                      c1.39,1.84,3.29,2.97,5.72,3.39c2.42,0.42,5.02,0.08,7.77-1.03c4.49-1.83,7.94-5.29,10.34-10.4c2.41-5.11,2.47-9.15,0.23-12.13
                      c-1.79-2.38-4.36-2.89-7.69-1.53s-5.87,4.17-7.62,8.43c-1.74,4.28-1.72,7.6,0.09,9.99c0.44,0.59,1.09,0.98,1.96,1.19
                      c0.86,0.21,1.65,0.17,2.37-0.13c0.38-0.16,0.63-0.16,0.74-0.01c0.1,0.13-0.06,0.29-0.49,0.45c-1.07,0.43-2.26,0.45-3.53,0.04
                      c-1.28-0.41-2.31-1.13-3.09-2.16c-1.93-2.56-1.9-5.82,0.09-9.79s4.99-6.78,9.02-8.41c3.84-1.56,6.75-1.04,8.72,1.56
                      c2.41,3.17,2.39,7.38-0.06,12.61s-6.04,8.82-10.8,10.74c-3.11,1.26-6.11,1.59-9.01,0.98s-5.21-2.06-6.95-4.35
                      C-0.62,40.62-0.25,34.94,4,28.22s10.7-11.84,19.34-15.35c6.56-2.66,12.9-3.84,18.99-3.51c2.68-3.53,5.92-6.06,9.75-7.62
                      c3-1.22,5.89-1.54,8.71-0.97C63.59,1.36,65.8,2.71,67.43,4.86z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg viewbox="-2 -2 300 200">
                                                <path
                                                    calssName="M0 path"
                                                    d="M69.5,17.41c0,1.05-0.07,2.06-0.2,3.04c-0.14,0.98-0.27,1.47-0.42,1.47c-0.11,0-0.17-0.07-0.17-0.22
                    c0.02-0.11,0.03-0.21,0.05-0.32c0.24-0.94,0.36-2.2,0.36-3.79c0-3.57-0.84-6.6-2.52-9.09s-3.73-3.73-6.16-3.73
                    c-3.92,0-7.92,3.25-12.03,9.76c-1.62,2.55-3.01,5.04-4.18,7.46c-1.13,2.28-3.33,7.12-6.61,14.51c-4.85,10.89-8.83,17.69-11.93,20.4
                    c-1.39,1.21-2.29,1.81-2.69,1.81c-0.1,0-0.14-0.09-0.14-0.28c0.02-0.03,0.18-0.24,0.5-0.64c1.55-1.96,2.79-4.6,3.71-7.9
                    c0.86-3.04,2.39-10.23,4.61-21.57c1.89-9.68,4.04-16.61,6.47-20.8c0.1-0.16,0.14-0.3,0.14-0.4c-0.21-0.11-0.67,0.47-1.4,1.73
                    c-2.36,3.98-5.14,11.12-8.33,21.44c-1.97,6.34-3.69,11.15-5.17,14.41c-1.48,3.27-3.25,6.13-5.29,8.61
                    c-3.36,4.08-6.74,6.13-10.13,6.13c-2.2,0-4-0.79-5.39-2.36C1.19,55.49,0.5,53.47,0.5,51c0-1.4,0.24-2.57,0.71-3.52
                    S2.28,46.04,3,46.04c1.03,0,1.55,0.86,1.55,2.58c0,0.89-0.17,1.65-0.5,2.28c-0.34,0.63-0.74,0.95-1.22,0.95
                    c-0.78,0-1.17-0.73-1.17-2.18c0-0.54-0.06-0.81-0.19-0.81c-0.26,0-0.38,0.74-0.38,2.22c0,2.2,0.65,4.01,1.94,5.42
                    C4.3,57.91,5.97,58.61,8,58.61c4.14,0,8.2-3.64,12.18-10.92c1.6-2.93,2.96-5.78,4.07-8.57c1.11-2.78,3.32-8.83,6.64-18.15
                    c1.4-3.95,2.97-7.54,4.72-10.76s3-4.84,3.75-4.84c0.11,0,0.17,0.08,0.17,0.24c-0.02,0.11-0.05,0.21-0.1,0.32
                    c-1.47,2.74-2.81,7.92-3.99,15.52c-1.78,11.15-3.45,19.27-5.02,24.35c-1.55,4.95-3.55,8.69-5.99,11.25
                    c-0.06,0.03-0.1,0.08-0.1,0.16c0.02,0.03,0.05,0.05,0.1,0.08c0.36,0,1.25-0.86,2.66-2.58c1.71-2.04,3.29-4.49,4.73-7.34
                    c1.44-2.85,4.06-8.68,7.84-17.5c2.68-6.24,4.81-10.8,6.38-13.69c1.58-2.89,3.32-5.44,5.24-7.64c3-3.41,6.01-5.12,9.06-5.12
                    c2.66,0,4.85,1.32,6.57,3.95C68.64,10.02,69.5,13.36,69.5,17.41z M31.83,15.15c0,0.59-0.45,1.75-1.36,3.48
                    c-1.37,2.61-2.68,3.92-3.95,3.92c-0.87,0-1.61-0.54-2.22-1.63c-0.6-1.09-0.9-2.42-0.9-4.01c0-1.53,0.32-3.37,0.97-5.52
                    c0.81-2.69,1.21-4.58,1.21-5.68c0-1.37-0.38-2.47-1.14-3.3s-1.76-1.25-3-1.25c-3.53,0-6.86,2.42-9.96,7.25s-4.66,9.98-4.66,15.43
                    c0,2.82,0.51,5.12,1.53,6.91c1.02,1.79,2.34,2.68,3.94,2.68c1.43,0,2.88-0.69,4.34-2.08c1.47-1.38,2.65-3.16,3.56-5.34
                    c0.06-0.13,0.11-0.2,0.14-0.2c0.13,0,0.19,0.12,0.19,0.36c0,0.54-0.51,1.57-1.52,3.1c-2.09,3.2-4.36,4.8-6.81,4.8
                    c-1.71,0-3.11-0.94-4.19-2.82c-1.08-1.88-1.62-4.33-1.62-7.33c0-5.83,1.59-11.19,4.77-16.08S17.82,0.5,21.59,0.5
                    c1.55,0,2.77,0.66,3.65,1.97s1.32,3.13,1.32,5.44c0,1.72-0.51,4.34-1.52,7.86c-0.35,1.24-0.52,2.22-0.52,2.94
                    c0,2.04,0.65,3.06,1.95,3.06c0.78,0,1.65-0.63,2.61-1.9c0.96-1.27,1.73-2.82,2.32-4.65c0.08-0.27,0.16-0.4,0.24-0.4
                    C31.76,14.83,31.83,14.93,31.83,15.15z M58.06,6.48c0,0.13-0.21,0.39-0.64,0.77c-1.85,1.67-3.48,4.07-4.89,7.21
                    c-1.41,3.14-3.01,7.97-4.82,14.47c-2.63,9.46-4.98,16.26-7.05,20.39s-4.62,7.11-7.67,8.9c1.41,0.37,2.5,0.55,3.26,0.55
                    c2.44,0,4.39-0.88,5.86-2.64c1.46-1.76,3.54-5.71,6.22-11.84c0.17-0.38,0.31-0.57,0.41-0.57c0.06,0.03,0.1,0.11,0.1,0.24
                    c0,0.27-0.75,2.01-2.24,5.21c-1.82,3.93-3.45,6.6-4.89,8.03c-1.43,1.42-3.2,2.14-5.29,2.14c-1.3,0-2.7-0.25-4.21-0.74
                    c-1.06,0.6-2.15,0.91-3.26,0.91c-0.84,0-1.26-0.28-1.26-0.82c0-0.67,0.59-1.01,1.76-1.01c0.65,0,1.51,0.13,2.57,0.4h0.31
                    c1.68-1.02,3.1-2.64,4.27-4.85s2.56-5.96,4.2-11.22c3.31-10.67,5.93-18.22,7.87-22.65c1.87-4.24,4.11-7.87,6.73-10.88
                    c1.32-1.48,2.16-2.22,2.54-2.22C58.01,6.24,58.06,6.32,58.06,6.48z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg viewbox="-2 -3 250 200">
                                                <path
                                                    calssName="J0 path"
                                                    d="M49.99,0.28c0.09,0.22-0.58,0.77-2,1.65c-1.49,0.89-3.16,1.74-5.04,2.55c-2.68,2.82-4.75,5.71-6.19,8.69
                  c-1.44,2.97-2.72,7.04-3.85,12.18l0.77-0.16c3.47-0.71,6.02-2.22,7.65-4.54c0.8-1.15,1.14-2.52,1.01-4.11
                  c-0.01-0.25,0.06-0.39,0.23-0.43c0.19-0.04,0.3,0.02,0.37,0.17c0.66,1.64,0.02,3.45-1.91,5.42c-1.93,1.97-4.31,3.25-7.15,3.83
                  c-0.43,0.09-0.79,0.15-1.1,0.18c-0.04,0.22-0.3,1.24-0.76,3.08c-1.06,4.26-2.15,7.38-3.25,9.35c-1.11,1.97-2.81,3.88-5.09,5.71
                  c-3.64,2.92-7.79,4.86-12.45,5.81c-2.69,0.55-5.07,0.57-7.14,0.06s-3.37-1.44-3.91-2.77c-0.3-0.73-0.25-1.42,0.13-2.05
                  c0.37-0.63,0.99-1.04,1.83-1.21c1.35-0.28,2.22,0.07,2.62,1.06c0.47,1.17-0.03,1.91-1.5,2.21C2.2,47.2,1.44,46.84,0.99,45.9
                  c-0.02-0.06-0.06-0.1-0.12-0.14c-0.35,0.07-0.38,0.46-0.1,1.16c0.46,1.16,1.67,1.96,3.61,2.41c1.95,0.45,4.15,0.42,6.61-0.08
                  c5.26-1.08,9.17-3.54,11.76-7.38c1.01-1.51,1.87-3.24,2.57-5.22c1.1-3.29,2.21-6.58,3.32-9.89l0.25-0.72
                  c-2.26-0.03-4.23-0.49-5.92-1.39c-1.69-0.9-2.84-2.09-3.43-3.57c-1.06-2.64-0.42-5.16,1.93-7.56c1.39-1.41,2.92-2.51,4.58-3.3
                  c1.68-0.79,4.82-1.88,9.42-3.29c2.03-0.61,4.39-1.46,7.1-2.57c3.12-2.52,5.41-3.94,6.89-4.24C49.75,0.07,49.93,0.12,49.99,0.28z
                   M42.13,4.85c-1.3,0.53-3.06,1.24-5.29,2.1c-3.61,1.41-6.3,2.62-8.07,3.63c-1.77,1.01-3.28,2.2-4.53,3.55
                  c-2.66,2.88-3.52,5.5-2.57,7.88c0.93,2.32,3.37,3.54,7.33,3.66C31.97,16.45,36.34,9.51,42.13,4.85z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </header>
                    </div>
                    <div calssName="slidegnb box nav">
                        <nav calssName="gnb">
                            <ul>
                                <li calssName="sm">
                                    <a href="#" calssName="abtn">
                                        앨범소개♡
                                    </a>
                                    <ul calssName="ssm">
                                        <div calssName="beforebox">
                                            <li>
                                                <a href="#" calssName="abtn">
                                                    앨범 상세
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li calssName="sm">
                                    <a href="#" calssName="abtn">
                                        CHART♡
                                    </a>
                                    <ul calssName="ssm">
                                        <div calssName="beforebox">
                                            <li>
                                                <a href="#" calssName="abtn">
                                                    PMJ(노래방인기!)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" calssName="abtn">
                                                    BMJ(빌보드!)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" calssName="abtn">
                                                    MMJ(일반 음원차트!)
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li calssName="sm">
                                    <a href="#" calssName="abtn">
                                        게시판♡
                                    </a>
                                    <ul calssName="ssm">
                                        <div calssName="beforebox">
                                            <li>
                                                <a href="#" calssName="abtn">
                                                    회원전용
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" calssName="abtn">
                                                    일반게시판
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li calssName="sm">
                                    <a href="#" calssName="abtn">
                                        기타세부사항♡
                                    </a>
                                    <ul calssName="ssm">
                                        <div calssName="beforebox">
                                            <li>
                                                <a href="#" calssName="abtn">
                                                    안내문구
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" calssName="abtn">
                                                    페이지 소개글
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            {/* <!-- 왼쪽 흐르는 글자 --> */}
            <div>
                {/* <!-- 상단 햄버거 버튼 클릭시 나오는 박스 --> */}
                <div calssName="noise"></div>
                <div calssName="coralwrapp"></div>
                <div calssName="whitewrapp"></div>
                <div calssName="wrapp">
                    <div calssName="ulcoverham">
                        <ul calssName="hamul">
                            <li>
                                <a href="#" calssName="abtn hambtnbiga">
                                    앨범소개
                                </a>
                                {/* <!-- 세부 카테고라 --> */}
                                <ul calssName="sham king">
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            앨범 상세
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" calssName="abtn hambtnbiga">
                                    인기!
                                </a>
                                <ul calssName="sham mostmusic">
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            PMJ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            BMJ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            MMJ
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" calssName="abtn hambtnbiga">
                                    게시판
                                </a>
                                <ul calssName="sham Hboard">
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            자유게시판📣
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            회원전용 게시판📢
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" calssName="abtn hambtnbiga">
                                    LANGUAGE
                                </a>
                                <ul calssName="sham LANGUAGE">
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            EngliSh
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            中國語
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" calssName="abtn shamaa">
                                            日本語
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 2. 메인영역 */}
            <main>
                <div className="swiper mySwiper wrappsub">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="swiper-slide albumsub tracksub">
                            <audio src="" className="AUDIO"></audio>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </main>
            {/* 3. 하단영역 */}
        </React.Fragment>
    ); //// return
}; ///// Layout /////

// 내보내기 필수!!!
export default Layout;
