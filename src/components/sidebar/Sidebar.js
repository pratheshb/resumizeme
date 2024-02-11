import './Sidebar.css'

export default function Sidebar() {

  return <aside>
    <div className="logo">
      <svg width="115" height="24" viewBox="0 0 115 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1014_274)">
          <path d="M12 24H0V8.00154C0 3.58147 3.58147 0 8.00154 0H20.0015V15.9985L12 24Z" fill="url(#paint0_linear_1014_274)" />
          <path d="M12 15.9985H20.0015C20.0015 20.5483 17.1382 24 12 24V15.9985Z" fill="#378EFF" />
          <path d="M20 6.66669H10C8.15905 6.66669 6.66667 8.15907 6.66667 10C6.66667 11.841 8.15905 13.3334 10 13.3334H20V6.66669Z" fill="#14141F" />
          <path d="M20 5.33331H24.6667C26.5076 5.33331 28 6.8257 28 8.66665C28 10.5076 26.5076 12 24.6667 12H20V5.33331Z" fill="#5DDFA9" />
          <path d="M20 5.33331H10C8.15905 5.33331 6.66667 6.8257 6.66667 8.66665C6.66667 10.5076 8.15905 12 10 12H20V5.33331Z" fill="#37B982" />
          <path d="M35.8832 12.6912H37.1936L39.6848 17.0112H41.4128L38.8208 12.5184C39.9584 12.1152 40.7936 11.0352 40.7936 9.73921C40.7936 8.61601 40.1456 7.6368 39.224 7.1472C38.8928 6.9744 38.5328 6.9024 38.1584 6.9024H34.4V17.0112H35.8832V12.6912ZM39.296 9.73921C39.296 10.5456 38.648 11.208 37.8416 11.208H35.8832V8.28481H37.8416C38.648 8.28481 39.296 8.93281 39.296 9.73921Z" fill="#3A3A43" />
          <path d="M44.6516 16.6224C45.17 16.9104 45.7316 17.0544 46.3076 17.0544C46.6244 17.0544 46.9556 16.9968 47.2868 16.9104C48.1652 16.6512 48.8996 16.0608 49.346 15.24L48.0356 14.5344C47.7908 14.9952 47.3732 15.3264 46.8692 15.4704C46.3652 15.6288 45.8324 15.5712 45.3572 15.312C45.1268 15.1824 44.9252 15.0096 44.7668 14.808L49.7924 13.3392C49.7924 13.3392 49.7636 13.0656 49.634 12.6048C49.5332 12.288 49.3892 11.9856 49.2164 11.712C48.8996 11.2224 48.4676 10.8192 47.9636 10.5456C47.1572 10.0992 46.2212 9.99841 45.3284 10.2576C44.45 10.5168 43.7156 11.1072 43.2692 11.928C42.8228 12.7344 42.722 13.6704 42.9812 14.5632C42.9812 14.5632 43.2836 15.8736 44.6516 16.6224ZM44.5796 12.6336C44.8244 12.1728 45.242 11.8416 45.746 11.6976C45.9332 11.64 46.1204 11.6112 46.3076 11.6112C46.6388 11.6112 46.9556 11.6976 47.2436 11.856C47.4884 11.9856 47.69 12.144 47.8484 12.36L44.3492 13.3824C44.378 13.1232 44.45 12.8784 44.5796 12.6336Z" fill="#3A3A43" />
          <path d="M53.9112 17.0976C53.9976 17.0976 54.084 17.0976 54.1704 17.0832C54.9624 17.0256 55.668 16.6656 56.1144 16.104C56.4888 15.6432 56.6616 15.0672 56.5896 14.5056C56.4024 13.008 54.9624 12.7056 54.1992 12.5328C53.9976 12.4896 53.8104 12.4608 53.6808 12.4032C53.1336 12.1872 53.2488 11.8992 53.292 11.7984C53.3784 11.6112 53.7672 11.4528 54.2136 11.5392C54.2856 11.5536 54.66 11.712 54.66 11.928L56.1576 11.8992C56.1288 10.8192 55.1352 10.2144 54.5016 10.0848C53.3784 9.85441 52.2984 10.3296 51.924 11.2224C51.492 12.2592 51.9816 13.3104 53.1048 13.7856C53.3352 13.8864 53.6088 13.944 53.8824 14.0016C54.7464 14.1744 55.0632 14.3184 55.1064 14.6928C55.1352 14.8512 55.0776 15.0096 54.9624 15.168C54.7608 15.3984 54.4296 15.5712 54.0408 15.6C53.3928 15.6576 52.7592 15.2976 52.7016 14.8368L51.2328 15.024C51.3768 16.2048 52.5576 17.0976 53.9112 17.0976Z" fill="#3A3A43" />
          <path d="M61.0055 17.0976C61.5527 17.0976 62.0567 16.9392 62.4887 16.68V17.0112H63.9863V10.272H62.4887V14.1168C62.4887 14.9376 61.8263 15.6 61.0055 15.6C60.1847 15.6 59.5223 14.9376 59.5223 14.1168V10.2144H58.0391V14.1168C58.0391 15.7584 59.3639 17.0976 61.0055 17.0976Z" fill="#3A3A43" />
          <path d="M67.3551 13.0944C67.3551 12.2736 67.9599 11.6112 68.7087 11.6112C69.4431 11.6112 70.0479 12.2736 70.0479 13.0944V17.0112H71.5455V13.0944C71.5455 12.2736 72.1503 11.6112 72.8847 11.6112C73.6335 11.6112 74.2383 12.2736 74.2383 13.0944V17.0112H75.7215V13.0944C75.7215 11.4528 74.4543 10.128 72.8847 10.128C72.0495 10.128 71.3151 10.5024 70.7967 11.1072C70.2783 10.5024 69.5295 10.128 68.7087 10.128C68.2191 10.128 67.7583 10.2576 67.3551 10.488V10.2144H65.8719V17.0112H67.3551V13.0944Z" fill="#3A3A43" />
          <path d="M78.8918 10.2144H77.4086V17.0112H78.8918V10.2144ZM79.1365 8.50081C79.1365 7.968 78.6901 7.53601 78.1573 7.53601C77.6101 7.53601 77.1782 7.968 77.1782 8.50081C77.1782 9.03361 77.6101 9.46561 78.1573 9.46561C78.6901 9.46561 79.1365 9.03361 79.1365 8.50081Z" fill="#3A3A43" />
          <path d="M86.1253 16.9824V15.5136H83.1877L86.3989 10.2H80.7397V11.6544H83.7781L80.5813 16.9824H86.1253Z" fill="#3A3A43" />
          <path d="M89.6375 16.6224C90.1559 16.9104 90.7175 17.0544 91.2935 17.0544C91.6103 17.0544 91.9415 16.9968 92.2727 16.9104C93.1511 16.6512 93.8855 16.0608 94.3319 15.24L93.0215 14.5344C92.7767 14.9952 92.3591 15.3264 91.8551 15.4704C91.3511 15.6288 90.8183 15.5712 90.3431 15.312C90.1127 15.1824 89.9111 15.0096 89.7527 14.808L94.7783 13.3392C94.7783 13.3392 94.7495 13.0656 94.6199 12.6048C94.5191 12.288 94.3751 11.9856 94.2023 11.712C93.8855 11.2224 93.4535 10.8192 92.9495 10.5456C92.1431 10.0992 91.2071 9.99841 90.3143 10.2576C89.4359 10.5168 88.7015 11.1072 88.2551 11.928C87.8087 12.7344 87.7079 13.6704 87.9671 14.5632C87.9671 14.5632 88.2695 15.8736 89.6375 16.6224ZM89.5655 12.6336C89.8103 12.1728 90.2279 11.8416 90.7319 11.6976C90.9191 11.64 91.1063 11.6112 91.2935 11.6112C91.6247 11.6112 91.9415 11.6976 92.2295 11.856C92.4743 11.9856 92.6759 12.144 92.8343 12.36L89.3351 13.3824C89.3639 13.1232 89.4359 12.8784 89.5655 12.6336Z" fill="#3A3A43" />
          <path d="M97.702 13.0944C97.702 12.2736 98.3068 11.6112 99.0556 11.6112C99.79 11.6112 100.395 12.2736 100.395 13.0944V17.0112H101.892V13.0944C101.892 12.2736 102.497 11.6112 103.232 11.6112C103.98 11.6112 104.585 12.2736 104.585 13.0944V17.0112H106.068V13.0944C106.068 11.4528 104.801 10.128 103.232 10.128C102.396 10.128 101.662 10.5024 101.144 11.1072C100.625 10.5024 99.8764 10.128 99.0556 10.128C98.566 10.128 98.1052 10.2576 97.702 10.488V10.2144H96.2188V17.0112H97.702V13.0944Z" fill="#3A3A43" />
          <path d="M109.325 16.6224C109.843 16.9104 110.405 17.0544 110.981 17.0544C111.298 17.0544 111.629 16.9968 111.96 16.9104C112.839 16.6512 113.573 16.0608 114.019 15.24L112.709 14.5344C112.464 14.9952 112.047 15.3264 111.543 15.4704C111.039 15.6288 110.506 15.5712 110.031 15.312C109.8 15.1824 109.599 15.0096 109.44 14.808L114.466 13.3392C114.466 13.3392 114.437 13.0656 114.307 12.6048C114.207 12.288 114.063 11.9856 113.89 11.712C113.573 11.2224 113.141 10.8192 112.637 10.5456C111.831 10.0992 110.895 9.99841 110.002 10.2576C109.123 10.5168 108.389 11.1072 107.943 11.928C107.496 12.7344 107.395 13.6704 107.655 14.5632C107.655 14.5632 107.957 15.8736 109.325 16.6224ZM109.253 12.6336C109.498 12.1728 109.915 11.8416 110.419 11.6976C110.607 11.64 110.794 11.6112 110.981 11.6112C111.312 11.6112 111.629 11.6976 111.917 11.856C112.162 11.9856 112.363 12.144 112.522 12.36L109.023 13.3824C109.051 13.1232 109.123 12.8784 109.253 12.6336Z" fill="#3A3A43" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1014_274" x1="2.10348" y1="2.46023" x2="16.7768" y2="20.1822" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0866F5" />
            <stop offset="1" stopColor="#0043A6" />
          </linearGradient>
          <clipPath id="clip0_1014_274">
            <rect width="114.466" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <nav>
      <ul>
        <li>
          <div className="menu">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.0406328 1.59693C0.0139911 1.72713 0 1.86193 0 2V14C0 15.1046 0.895431 16 2 16H12C13.1046 16 14 15.1046 14 14V2C14 0.895431 13.1046 0 12 0H2C1.0335 0 0.227125 0.685564 0.0406328 1.59693ZM2 2H12V14H2V2ZM6 6H4V4H6V6ZM7 6H10V5H7V6ZM10 7V8H4V7H10ZM10 10V9H4V10H10ZM8 11V12H4V11H8Z" fill="#4C4C55" />
            </svg>
            <b className='menu-item-header'>My Templates</b>
          </div>
          <div className="menu">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1014_298)">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.5 0C10.0899 0 13 2.91015 13 6.5C13 7.93484 12.5351 9.2611 11.7477 10.3363L15.2932 13.8818C15.6837 14.2723 15.6837 14.9055 15.2932 15.296C14.9026 15.6866 14.2695 15.6866 13.8789 15.296L10.333 11.7501C9.25837 12.536 7.93336 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0ZM6.5 2C8.98528 2 11 4.01472 11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2Z" fill="#4C4C55" />
              </g>
              <defs>
                <clipPath id="clip0_1014_298">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <b className='menu-item-header'>Search</b>
          </div>
          <ul>
            <li className='menu'>
              <label className="selection" htmlFor="select-1">
                <input type="checkbox" id="select-1" />
              </label>
              <span className='menu-item'>Software Engineer</span>
            </li>
            <li className='menu'>
              <label className="selection" htmlFor="select-2">
                <input type="checkbox" id="select-2" />
              </label>
              <span className='menu-item'>Computer Hardware Engineer</span>
            </li>
            <li className='menu'>
              <label className="selection" htmlFor="select-3">
                <input type="checkbox" id="select-3" />
              </label>
              <span className='menu-item'>Network Engineer</span>
            </li>
            <li className='menu'>
              <label className="selection" htmlFor="select-4">
                <input type="checkbox" id="select-4" />
              </label>
              <span className='menu-item'>Technical Support</span>
            </li>
            <li className='menu'>
              <label className="selection" htmlFor="select-5">
                <input type="checkbox" id="select-5" />
              </label>
              <span className='menu-item'>Network Administrator</span>
            </li>
            <li className='menu'>
              <label className="selection" htmlFor="select-6">
                <input type="checkbox" id="select-6" />
              </label>
              <span className='menu-item'>Management</span>
            </li>
            <li className='menu'>
              <label className="selection" htmlFor="select-7">
                <input type="checkbox" id="select-7" />
              </label>
              <span className='menu-item'>Data analysis</span>
            </li>
            <li className="menu">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1014_371)">
                  <path d="M7.00006 3.10229V7.00002H10.8978" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00006 13.125C10.3828 13.125 13.1251 10.3827 13.1251 7C13.1251 3.61726 10.3828 0.875 7.00006 0.875C3.61732 0.875 0.875061 3.61726 0.875061 7C0.875061 10.3827 3.61732 13.125 7.00006 13.125Z" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1014_371">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className='menu-item'>Past Search 1</span>
            </li>
            <li className="menu">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1014_371)">
                  <path d="M7.00006 3.10229V7.00002H10.8978" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00006 13.125C10.3828 13.125 13.1251 10.3827 13.1251 7C13.1251 3.61726 10.3828 0.875 7.00006 0.875C3.61732 0.875 0.875061 3.61726 0.875061 7C0.875061 10.3827 3.61732 13.125 7.00006 13.125Z" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1014_371">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className='menu-item'>Past Search 2</span>
            </li>
            <li className="menu">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1014_371)">
                  <path d="M7.00006 3.10229V7.00002H10.8978" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00006 13.125C10.3828 13.125 13.1251 10.3827 13.1251 7C13.1251 3.61726 10.3828 0.875 7.00006 0.875C3.61732 0.875 0.875061 3.61726 0.875061 7C0.875061 10.3827 3.61732 13.125 7.00006 13.125Z" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1014_371">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className='menu-item'>Computer and InhtmlFormation Specialist</span>
            </li>
            <li className="menu">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1014_371)">
                  <path d="M7.00006 3.10229V7.00002H10.8978" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00006 13.125C10.3828 13.125 13.1251 10.3827 13.1251 7C13.1251 3.61726 10.3828 0.875 7.00006 0.875C3.61732 0.875 0.875061 3.61726 0.875061 7C0.875061 10.3827 3.61732 13.125 7.00006 13.125Z" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1014_371">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className='menu-item'>Database Administrator</span>
            </li>
            <li className="menu">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1014_371)">
                  <path d="M7.00006 3.10229V7.00002H10.8978" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.00006 13.125C10.3828 13.125 13.1251 10.3827 13.1251 7C13.1251 3.61726 10.3828 0.875 7.00006 0.875C3.61732 0.875 0.875061 3.61726 0.875061 7C0.875061 10.3827 3.61732 13.125 7.00006 13.125Z" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1014_371">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className='menu-item'>InhtmlFormation Security</span>
            </li>
          </ul>
        </li>
        <li>
          <div className='menu-header'>
            <div className='menu'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.04063 1.59693C1.01399 1.72713 1 1.86193 1 2V14C1 15.1046 1.89543 16 3 16H13C14.1046 16 15 15.1046 15 14V2C15 0.895431 14.1046 0 13 0H3C2.0335 0 1.22713 0.685564 1.04063 1.59693ZM3 2H13V7H3V2ZM3 9V14H13V9H3ZM6 5H10V4H6V5ZM10 12H6V11H10V12Z" fill="#4C4C55" />
              </svg>
              <b className='menu-item-header'>My boards</b>
            </div>
            <div className='rounded-icon-container'>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3V0H3L3 3H0V5H3L3 8H5V5H8V3H5Z" fill="#A1A1A5" />
              </svg>
            </div>
          </div>
          <ul>
            <li className='menu'>
              <span>🗂️</span>
              <span className='menu-item'>Board 1</span>
            </li>
            <li className='menu'>
              <span>🗂️</span>
              <span className='menu-item'>Board 2</span>
            </li>
            <li className='menu'>
              <span>🗂️</span>
              <span className='menu-item'>Board 3</span>
            </li>
            <li className='menu'>
              <span>🔒</span>
              <span className='menu-item'>Board Agent 1</span>
            </li>
            <li className='menu'>
              <span>🔒</span>
              <span className='menu-item'>Board Agent 2</span>
            </li>
            <li className='menu'>
              <span>🔒</span>
              <span className='menu-item'>Board Agent 3</span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <section className='account'>
      <div className="user-detail">
        <img className="user-pic" width={32} height={32} src="/assets/images/profile1.png" alt="Profile 1" />
        <p className="user-name">Carla</p>
      </div>
      <button className='icon-btn'>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1014_500)">
<path fillRule="evenodd" clipRule="evenodd" d="M0 9.00002L5.01355e-05 7.00003L1.71216 6.42932C2.05585 6.31476 2.31702 6.0357 2.45584 5.70108C2.59467 5.36644 2.60519 4.98882 2.44317 4.66477L1.63593 3.05031L3.05018 1.63614L4.66439 2.44324C4.98851 2.6053 5.36622 2.59477 5.70093 2.4559C6.03561 2.31704 6.31472 2.05583 6.4293 1.71208L6.99998 0L8.99998 4.95036e-05L9.57064 1.71203C9.68522 2.05578 9.96434 2.317 10.299 2.45586C10.6338 2.59472 11.0115 2.60525 11.3356 2.44319L12.9498 1.63607L14.364 3.05031L13.5569 4.66455C13.3948 4.98865 13.4053 5.36632 13.5442 5.70102C13.683 6.03568 13.9443 6.31478 14.288 6.42936L16 7.00003L16 9.00003L14.2881 9.57067C13.9443 9.68526 13.683 9.9644 13.5442 10.2991C13.4053 10.6339 13.3948 11.0116 13.5568 11.3357L14.3639 12.9499L12.9497 14.3641L11.3354 13.5569C11.0113 13.3949 10.6336 13.4054 10.299 13.5442C9.96433 13.6831 9.68525 13.9443 9.57068 14.288L8.99997 16.0001L6.99998 16L6.42926 14.2879C6.3147 13.9442 6.03563 13.683 5.701 13.5442C5.36633 13.4053 4.98868 13.3948 4.66461 13.5569L3.05024 14.3641L1.63606 12.9498L2.4432 11.3355C2.60525 11.0114 2.59472 10.6337 2.45587 10.2991C2.31702 9.96439 2.05581 9.68529 1.71208 9.57071L0 9.00002ZM8.00003 5.00003C6.34189 5.00003 5.00003 6.34189 5.00003 8.00003C5.00003 9.65818 6.34189 11 8.00003 11C9.65818 11 11 9.65818 11 8.00003C11 6.34189 9.65818 5.00003 8.00003 5.00003Z" fill="#4C4C55"/>
</g>
<defs>
<clipPath id="clip0_1014_500">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

      </button>
    </section>
  </aside>
} 