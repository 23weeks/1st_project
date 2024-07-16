import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';

import URL from 'constants/url';

//COMMON
import Header from 'components/Header';
import Footer from 'components/Footer';
import Error from 'components/Error';

import * as api from 'api/fetch';

const RootRoutes = () => {
	//useLocation객체를 이용하여 정규표현식을 사용한 /admin/~ 으로 시작하는 경로와 비교에 사용(아래 1줄) */}
	const location = useLocation();
	
	//리액트에서 사이트관리자에 접근하는 토큰값 위변조 방지용으로 서버에서 비교하는 함수 추가
	const jwtAuthentication = useCallback(() => {
		console.group("jwtAuthentication");
		console.log("[Start] jwtAuthentication ------------------------------");

		const jwtAuthURL = "/jwtAuthAPI";
		let requestOptions = {
			method: "POST",
		};

		api.requestFetch(jwtAuthURL, requestOptions, (resp) => {
			//임시 true 처리
			return setMounted(true);
			
			/* 임시주석
			if (resp === false) {
				setMounted(false);
			} else {
				setMounted(true); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
			}
			*/
		});

		console.log("------------------------------jwtAuthentication [End]");
		console.groupEnd("jwtAuthentication");
	}, []);
	
	//시스템관리 메뉴인 /admin/으로 시작하는 URL은 모두 로그인이 필요하도록 코드추가(아래)
	const isMounted = useRef(false); // 아래 로그인 이동 부분이 2번 실행되지 않도록 즉, 마운트 될 때만 실행되도록 변수 생성
	const [mounted, setMounted] = useState(false); // 컴포넌트 최초 마운트 후 리렌더링 전 로그인 페이지로 이동하는 조건으로 사용
	
	useEffect(() => {
		if (!isMounted.current) { // 컴포넌트 최초 마운트 시 페이지 진입 전(렌더링 전) 실행
			isMounted.current = true; // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
			setMounted(true); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
			const regex = /^(\/admin\/)+(.)*$/; //정규표현식 사용: /admin/~ 으로 시작하는 경로 모두 포함
			if(regex.test(location.pathname)) {
				setMounted(false); // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용. 기본은 숨기기
				jwtAuthentication(); // 이 함수에서 관리자단 인증여부 확인 후 렌더링 처리
			}
		}
	},[jwtAuthentication, location, mounted]); // location 경로와 페이지 마운트상태가 변경 될 때 업데이트 후 리렌더링
	
	if(mounted) { // 인증 없이 시스템관리 URL로 접근할 때 렌더링 되는 것을 방지하는 조건추가. 
		return (
			<Routes>
				<Route path={URL.ERROR} element={<Error />} />
				<Route path="*" element={<SecondRoutes/>} />
			</Routes>
		)
	}
}

const SecondRoutes = () => {
	//useRef객체를 사용하여 페이지 마운트 된 후 ui.js를 로딩 하도록 변경 코드 추가(아래)
	const isMounted = useRef(false); // 아래 로그인 이동 부분이 2번 실행되지 않도록 즉, 마운트 될 때만 실행되도록 변수 생성
	useEffect(() => {
		if (!isMounted.current) { // 컴포넌트 최초 마운트 시 페이지 진입 전(렌더링 전) 실행
			isMounted.current = true; // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
		}else{
			//initPage();
		}
	},[]);
	
	return (
		<>
		<Header />
		<Routes>
			{/* MAIN */}
			{/*<Route path={URL.MAIN} element={<EgovMain />} />*/}
		</Routes>
		<Footer />
		</>
	)
}

export default RootRoutes;