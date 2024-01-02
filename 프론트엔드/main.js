// 예시 데이터
const teamInfoData = {
    teamName: 'Manchester United',
    recentMatches: 'Recent Matches: Win, Draw, Loss',
    upcomingMatches: 'Upcoming Matches: vs TeamA, vs TeamB',
};

const playerInfoData = {
    playerName: 'Son Heung-Min',
    stats: 'Stats: Goals - 10, Assists - 5',
    career: 'Career: Total Matches - 100, Goals - 50',
};

const teamBondData = {
    teamBond: '나와 우리팀의 친밀도: 85%',
};

const scheduleData = {
    schedule: '경기 일정: Next Match - vs TeamC on 2023-01-01',
};


const teamButtonElement = document.getElementById('teamButton');
console.log('teamButtonElement:', teamButtonElement);



// 버튼 클릭 이벤트 처리
document.getElementById('teamButton').addEventListener('click', () => displayInfo('team', teamInfoData));
document.getElementById('playerButton').addEventListener('click', () => displayInfo('player', playerInfoData));
document.getElementById('teamBondButton').addEventListener('click', () => displayInfo('teamBond', teamBondData));
document.getElementById('scheduleButton').addEventListener('click', () => displayInfo('schedule', scheduleData));

// 정보 표시 함수
function displayInfo(type, data) {
    const infoContainer = document.getElementById('info');
    
    switch (type) {
        case 'team':
            infoContainer.innerHTML = `<h2>${data.teamName}</h2><p>${data.recentMatches}</p><p>${data.upcomingMatches}</p>`;
            break;
        case 'player':
            infoContainer.innerHTML = `<h2>${data.playerName}</h2><p>${data.stats}</p><p>${data.career}</p>`;
            break;
        case 'teamBond':
            infoContainer.innerHTML = `<h2>팀과의 친밀도</h2><p>${data.teamBond}</p>`;
            break;
        case 'schedule':
            infoContainer.innerHTML = `<h2>경기 일정</h2><p>${data.schedule}</p>`;
            break;
        default:
            infoContainer.innerHTML = '선택된 정보가 없습니다.';
    }
}
