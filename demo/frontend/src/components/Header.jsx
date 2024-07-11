import React, {useState, useEffect} from 'react';

function Header() {
	const [message, setMessage] = useState("");

    useEffect(() => {
      fetch('/test/api.do')
          .then(response => response.text())
          .then(message => {
              setMessage(message);
          });
    },[])
	
	return (
		<div className="wrapper">
			<div className="board_table">
				<div className="board_tr">
					<div className="board_th">
						1번째
					</div>
					<div className="board_td">
						{message}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;