import Header from '../components/Header';
import './LetterPage.css';
import { useState } from 'react'; // We need useState for this


function LetterPage() {
  // 1. To track if she has entered the correct password
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // 2. To store what she is typing in the input field
  const [passwordInput, setPasswordInput] = useState('');
  // 3. To show an error message if the password is wrong
  const [error, setError] = useState('');

  // --- THE SECRET PASSWORD ---
  // IMPORTANT: Change this to your secret password! It should be something she knows.
  const CORRECT_PASSWORD = "coco0406"; 

  // --- HANDLER FUNCTION for the form submission ---
  const handlePasswordSubmit = (event) => {
    // a. Prevent the page from reloading when the form is submitted
    event.preventDefault(); 
    
    // b. Check if the typed password is correct
    if (passwordInput === CORRECT_PASSWORD) {
      // If correct, set authenticated to true to show the letter
      setIsAuthenticated(true);
      setError(''); // Clear any previous errors
    } else {
      // If incorrect, show an error message and clear the input
      setError('땡 :(');
      setPasswordInput('');
    }
  };
  return (
    <>
      <Header />
      <div className="letter-page-container">

        {isAuthenticated ?(
        <div className="letter-content">
          <h1>주연이에게,</h1>
          <p>
            주연아~ 우리가 벌써 100일이다! 내 친구들이랑 어쩌다가 저녁 먹다가 이렇게 우리 둘이 사귈줄 꿈에도 몰랐어! ㅋㅋㅋㅋ 
            그리고 벌써 100일이라는 시간이 지났다니... 이렇게 보면 시간이 참 빨리 지난거 같은데, 우리가 찍은 사진들을 보면 되게 오래전일 같고,
             그때보다 지금의 우리가 더 행복하고 성숙하고 서로에 대해 더 많이 아는것 같아 ㅋㅋㅋ 50일 전후 사진들만 봐도 우리의 애기 시절을 보는것 같아 ㅎㅎ
          </p>
          <p>
            주연이 덕분에 내 2025년은 현재까지 핑크색으로 물들여져 있는거 같아! 내가 만든 웹사이트 배경색깔처럼~ ㅎㅎ 아침에 일어날때, 공부할때, 일할때,
             심지어 친구들이랑 농구할때도 주연이에 대한 생각은 늘 내 마음속 중앙에 크게 떡하니 차지하고 있는거 같아! 주연이랑 연애하면서 사랑이 뭔지, 
             어떻게 주고 받아야하는지 제대로 알게 된거 같아! 첫사랑에 대한 정의는 사람마다 다르더라고?! 누구는 그냥 처음으로 좋아했던 사람이 첫 사랑이 되고,
             누구는 첫 연애가 첫사랑이 되는 경우도 있고... 나도 고민을 많이 해봤거든? 나는 첫사랑을 어떻게 정의하고싶은지... 근데 나는 아무래도 
             처음으로 사랑의 힘을 느끼게 해주고 사랑을 믿게해준 사람이 첫사랑인것 같아. 그런데 이런것을 주연이로부터 처음 느끼게됐어 ㅎ 주연이한테 사랑을 엄청 많이 받으면서, 
             사랑이라는 단어와 주연이라는 사람이 이제는 내 마음속에서 서로 떼고싶어도 뗄수 없는 관계가 된것 같아! 나도 내 인생의 첫사랑은 
             엄청 중요한 사람이어 함부로 고르지 않아! 이거는 진짜 빈말이 아니라는것을 꼭 알아줘!
          </p>
          <p>
            신기한게, 내가 기분이 별로일적마다 주연이와 함께 보냈던 일들, 그리고 앞으로 함께 보낼 시간들을 떠올리면 나도 모르게 미소가 지어지고 현재 기분상태를 
            잘 극복하게되는 동기부여가 되는것 같아 ㅎㅎ 자연스럽게 이러는거보면 그만큼 주연이는 나한테 사랑, 행복, 그리고 희망을 주는 사람인것 같아.
            이렇게 나를 좋아해주고 내가 좋아하는 사람을 성인이 되기 전부터 만나서 이 연애는 너무 소중한것 같아. 소중한만큼 나도 항상 최선을 
            다하려고 노력하고 있고🫡
          </p>
          <p>
            100일을 같이 못 보내서 너무 아쉽고, 몸도 멀리 있으니깐 너무 힘들지만, 그만큼 주연이가 캐나다에 왔을때 얻는 기쁨과 행복함이 우리가 떨어진
            날만큼 곱해져서 올거같아! 곧 살게 될 워털루에서 서로 의존하면서 행복한 연애 하자! 많이 사랑하고, 고맙고, 보고싶고, 앞으로 쭉 infinity and beyond 하자! 
          </p>
          <div className="signature">
            100일동안 함께 해줘서 고마워~ ❤️
            <br />
            07.14.2025
            <br />
            100일을 기념하며, 종빈이가
          </div>
        </div>
        ): (
          // IF AUTHENTICATED IS FALSE, SHOW THE PASSWORD FORM
          <div className="password-form-container">
            <form onSubmit={handlePasswordSubmit}>
              <h2>100일 편지</h2>
              <p>비밀번호를 입력해주세요</p>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Password"
              />
              <button type="submit">편지보기</button>
              
              {/* This will only show the error message if it exists */}
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default LetterPage;