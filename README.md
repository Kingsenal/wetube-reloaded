# Wetube Reloaded

-글로벌 라우터
/ -> Home
/join -> Join
/login -> Login
/search -> Search


/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile


/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video


//라우터를 도메인별로 나누는 것이 효율적
//URL을 깔끔하게 보이기 위해서 규칙의 예외가 있을 수 있음  ex) /users/login 이 아니라 /login