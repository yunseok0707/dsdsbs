
var mapContainer = document.getElementById('map'),
mapOption = {
    center: new kakao.maps.LatLng(36.33282919999969, 127.40564535666276),
    level: 6
};

var map = new kakao.maps.Map(mapContainer, mapOption);
var clusterer = new kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 5
}); // 클러스터러 전역변수로 선언



// 마커 위치 배열
var positions = [
{
name: '대전대성고등학교',
content: '<div>대전대성고등학교</div>',
latlng: new kakao.maps.LatLng(36.33282919999969, 127.40564535666276)
},
{
name: '가수원중학교',
content: '<div>가수원중학교</div>', 
latlng: new kakao.maps.LatLng(36.29845647, 127.3545755)
},
{
name: '갈마중학교',
content: '<div>갈마중학교</div>', 
latlng: new kakao.maps.LatLng(36.34814618, 127.3647543)
},
{
name: '경덕중학교',
content: '<div>경덕중학교</div>',
latlng: new kakao.maps.LatLng(36.34956029, 127.4224339)
},
{
name: '기성중학교',
content: '<div>기성중학교</div>', 
latlng: new kakao.maps.LatLng(36.24986466, 127.3413383)
},
{
name: '대덕중학교',
content: '<div>대덕중학교</div>', 
latlng: new kakao.maps.LatLng(36.37939869, 127.377148)
},
{
name: '대전가양중학교',
content: '<div>대전가양중학교</div>',
latlng: new kakao.maps.LatLng(36.35040548, 127.4483119)
},
{
name: '대전가오중학교',
content: '<div>대전가오중학교</div>', 
latlng: new kakao.maps.LatLng(36.30862056, 127.4571443)
},
{
name: '대전갑천중학교',
content: '<div>대전갑천중학교</div>', 
latlng: new kakao.maps.LatLng(36.36191375, 127.3691973)
},
{
name: '대전관저중학교',
content: '<div>대전관저중학교</div>',
latlng: new kakao.maps.LatLng(36.30536604, 127.3399239)
},
{
name: '대전관평중학교',
content: '<div>대전관평중학교</div>',
latlng: new kakao.maps.LatLng(36.4248505, 127.3879472)
},
    {
    name: '대전괴정중학교',
    content: '<div>대전괴정중학교</div>',
    latlng: new kakao.maps.LatLng(36.3403185, 127.3788225)
    },
    {
    name: '대전구봉중학교',
    content: '<div>대전구봉중학교</div>', 
    latlng: new kakao.maps.LatLng(36.30042393, 127.3299604)
    },
    {
    name: '대전글꽃중학교',
    content: '<div>대전글꽃중학교</div>', 
    latlng: new kakao.maps.LatLng(36.31846574, 127.408672)
    },
    {
    name: '대전남선중학교',
    content: '<div>대전남선중학교</div>',
    latlng: new kakao.maps.LatLng(36.36310071, 127.3722085)
    },
    {
    name: '대전내동중학교',
    content: '<div>대전내동중학교</div>',
    latlng: new kakao.maps.LatLng(36.33257479, 127.3703063)
    },
    {
        name: '대전노은중학교',
        content: '<div>대전노은중학교</div>',
        latlng: new kakao.maps.LatLng(36.36983706,27.3242583)
        },
        {
        name: '대전느리울중학교',
        content: '<div>대전느리울중학교</div>', 
        latlng: new kakao.maps.LatLng(36.297171, 127.3394931)
        },
        {
        name: '대전대문중학교',
        content: '<div>대전대문중학교</div>', 
        latlng: new kakao.maps.LatLng(36.30798919, 127.4007843)
        },
        {
        name: '대전대성중학교',
        content: '<div>대전대성중학교</div>',
        latlng: new kakao.maps.LatLng(36.33193009,127.4071301)
        },
        {
        name: '대전대신중학교',
        content: '<div>대전대신중학교</div>',
        latlng: new kakao.maps.LatLng(36.30893749, 127.3801515)
        },
        {
            name: '대전동화중학교',
            content: '<div>대전동화중학교</div>',
            latlng: new kakao.maps.LatLng(36.4228527,127.3898691)
            },
            {
            name: '대전두리중학교',
            content: '<div>대전두리중학교</div>', 
            latlng: new kakao.maps.LatLng(36.42863645, 127.3813253)
            },
            {
            name: '대전둔산중학교',
            content: '<div>대전둔산중학교</div>', 
            latlng: new kakao.maps.LatLng(36.35327735, 127.3723902)
            },
            {
            name: '대전둔원중학교',
            content: '<div>대전둔원중학교</div>',
            latlng: new kakao.maps.LatLng(36.34255662,127.3763827)
            },
            {
            name: '대전만년중학교',
            content: '<div>대전만년중학교</div>',
            latlng: new kakao.maps.LatLng(36.3669751, 127.3760155)
            },
            {
             name: '대전매봉중학교',
                content: '<div>대전매봉중학교</div>',
                latlng: new kakao.maps.LatLng(36.36926244,127.4361516 )
                },
                {
                name: '대전문정중학교',
                content: '<div>대전문정중학교</div>', 
                latlng: new kakao.maps.LatLng(36.35547497, 127.4006349)
                },
                {
                name: '대전문지중학교',
                content: '<div>대전문지중학교</div>', 
                latlng: new kakao.maps.LatLng(36.3971816, 127.3991517)
                },
                {
                name: '대전버드내중학교',
                content: '<div>대전둔원중학교</div>',
                latlng: new kakao.maps.LatLng(36.31675843,127.3833826)
                },
                {
                name: '대전법동중학교',
                content: '<div>대전법동중학교</div>',
                latlng: new kakao.maps.LatLng(36.36662031,127.4335239)
                },
{
name: '대전변동중학교',
content: '<div>대전변동중학교</div>',
latlng: new kakao.maps.LatLng(36.32448348,127.3756749)
},
{
name: '대전봉산중학교',
content: '<div>대전봉산중학교</div>', 
latlng: new kakao.maps.LatLng(36.33083277, 127.3733609)
},
{
name: '대전봉우중학교',
content: '<div>대전봉우중학교</div>',
latlng: new kakao.maps.LatLng(36.29872013,127.3326001 )
},
{
name: '대전삼육중학교',
content: '<div>대전삼육중학교</div>', 
latlng: new kakao.maps.LatLng(36.3117518, 127.3728802)
},
{
    name: '대전삼천중학교',
    content: '<div>대전삼천중학교</div>',
    latlng: new kakao.maps.LatLng(36.35862057,127.3943867)
    },
    {
    name: '대전새미래중학교',
    content: '<div>대전새미래중학교</div>',
    latlng: new kakao.maps.LatLng(36.37914743,127.3049612 )
    },
    {
    name: '대전서중학교',
    content: '<div>대전서중학교</div>', 
    latlng: new kakao.maps.LatLng(36.33613455, 127.3738902)
    },
    {
        name: '대전송강중학교',
        content: '<div>대전송강중학교</div>',
        latlng: new kakao.maps.LatLng(36.43739493,127.38158 )
        },
        {
        name: '대전삼육중학교',
        content: '<div>대전삼육중학교</div>', 
        latlng: new kakao.maps.LatLng(36.3117518, 127.3728802)
        },
        {
            name: '대전송촌중학교',
            content: '<div>대전송촌중학교</div>',
            latlng: new kakao.maps.LatLng(36.36424286,127.4435109)
            },
            {
            name: '대전신계중학교',
            content: '<div>대전신계중학교</div>',
            latlng: new kakao.maps.LatLng(36.30179681,127.3769299 )
            },
            {
            name: '대전신일중학교',
            content: '<div>대전신일중학교</div>', 
            latlng: new kakao.maps.LatLng(36.30918673, 127.4346114)
            },
            {
                name: '대전어은중학교',
                content: '<div>대전어은중학교</div>',
                latlng: new kakao.maps.LatLng(36.36595095,127.3528117 )
                },
                {
                name: '대전외삼중학교',
                content: '<div>대전외삼중학교</div>', 
                latlng: new kakao.maps.LatLng(36.39432501, 127.3103653)
                },
                {
                    name: '대전원신흥중학교',
                    content: '<div>대전원신흥중학교</div>',
                    latlng: new kakao.maps.LatLng(36.3331156,127.3454407 )
                    },
                    {
                    name: '대전용운중학교',
                    content: '<div>대전용운중학교</div>', 
                    latlng: new kakao.maps.LatLng(36.32556806, 127.4650947 )
                    },
                    {
                        name: '대전용전중학교',
                        content: '<div>대전용전중학교</div>',
                        latlng: new kakao.maps.LatLng(36.35659058,127.4252878)
                        },
                        {
                        name: '대전월평중학교',
                        content: '<div>대전월평중학교</div>',
                        latlng: new kakao.maps.LatLng(36.35641076,127.3676339)
                        },
                        {
                        name: '대전은어송중학교',
                        content: '<div>대전은어송중학교</div>', 
                        latlng: new kakao.maps.LatLng(36.30035253, 127.4611736)
                        },


                            {
                            name: '대전자운중학교',
                            content: '<div>대전자운중학교</div>',
                            latlng: new kakao.maps.LatLng(36.411069919, 127.3381429)
                            },
                            {
                            name: '대전장대중학교',
                            content: '<div>대전장대중학교</div>', 
                            latlng: new kakao.maps.LatLng(36.36054426, 127.3386734)
                            },
                            {
                            name: '대전전민중학교',
                            content: '<div>대전전민중학교</div>', 
                            latlng: new kakao.maps.LatLng(36.40136506, 127.4058951)
                            },
                            {
                            name: '대전정림중학교',
                            content: '<div>대전정림중학교</div>',
                            latlng: new kakao.maps.LatLng(36.29381397, 127.3610669)
                            },
                            {
                            name: '대전중앙중학교',
                            content: '<div>대전중앙중학교</div>', 
                            latlng: new kakao.maps.LatLng(36.33842033, 127.414482 )
                            },
                            {
                            name: '대전중학교',
                            content: '<div>대전중학교</div>', 
                            latlng: new kakao.maps.LatLng(36.3207927, 127.4249206)
                            },
                            {
                            name: '대전지족중학교',
                            content: '<div>대전지족중학교</div>',
                            latlng: new kakao.maps.LatLng(36.37806035, 127.3208878)
                            },
                            {
                            name: '대전체육중학교',
                            content: '<div>대전체육중학교</div>', 
                            latlng: new kakao.maps.LatLng(36.33690588, 127.3428093)
                            },
                            {
                            name: '대전탄방중학교',
                            content: '<div>대전탄방중학교</div>', 
                            latlng: new kakao.maps.LatLng(36.35051423, 127.3944739)
                            },
                            {
                                name: '대전태평중학교',
                                content: '<div>대전태평중학교</div>',
                                latlng: new kakao.maps.LatLng(36.32944434, 127.3973135)
                                },
                                {
                                name: '가대전하기중학교',
                                content: '<div>대전하기중학교</div>', 
                                latlng: new kakao.maps.LatLng(36.38579577, 127.3221484)
                                },
                                {
                                name: '동대전중학교',
                                content: '<div>동대전중학교</div>', 
                                latlng: new kakao.maps.LatLng(36.3451859, 127.4559293)
                                },
                                {
                                name: '동명중학교',
                                content: '<div>동명중학교</div>',
                                latlng: new kakao.maps.LatLng(36.30840316, 127.438802  )
                                },
                                {
                                name: '동신중학교',
                                content: '<div>동신중학교</div>', 
                                latlng: new kakao.maps.LatLng(36.32032843, 127.4596709 )
                                },
                                {
                                name: '대전대청중학교',
                                content: '<div>대전대청중학교</div>', 
                                latlng: new kakao.maps.LatLng(36.44893735, 127.437799  )
                                },
                                {
                                name: '대전대화중학교',
                                content: '<div>대전대화중학교</div>',
                                latlng: new kakao.maps.LatLng(36.36159732, 127.4148277)
                                },
                                {
                                name: '대전덕명중학교',
                                content: '<div>대전덕명중학교</div>', 
                                latlng: new kakao.maps.LatLng(36.34602581, 127.3027684 )
                                },
                                {
                                name: '대전도마중학교',
                                content: '<div>대전도마중학교</div>', 
                                latlng: new kakao.maps.LatLng(36.31889647, 127.371976)
                                },
                                {
                                name: '대전도안중학교',
                                content: '<div>대전도안중학교</div>',
                                latlng: new kakao.maps.LatLng(36.31792328, 127.3456771)
                                },
                                {
                                name: '대전동산중학교',
                                content: '<div>대전동산중학교</div>',
                                latlng: new kakao.maps.LatLng(36.31522118, 127.4041258)
                                },
                                {
                                    name: '보문중학교',
                                    content: '<div>보문중학교</div>',
                                    latlng: new kakao.maps.LatLng(36.336346, 127.4233009)
                                    },
                                    {
                                    name: '성덕중학교',
                                    content: '<div>성덕중학교</div>', 
                                    latlng: new kakao.maps.LatLng(36.38653547,127.3444926)
                                    },
                                    {
                                    name: '신탄중앙중학교',
                                    content: '<div>신탄중앙중학교</div>', 
                                    latlng: new kakao.maps.LatLng(36.44249258, 127.4232187)
                                    },
                                    {
                                    name: '신탄중학교',
                                    content: '<div>신탄중학교</div>',
                                    latlng: new kakao.maps.LatLng(36.44246813,127.4231238)
                                    },
                                    {
                                    name: '오정중학교',
                                    content: '<div>오정중학교</div>', 
                                    latlng: new kakao.maps.LatLng(36.35110005,127.4078761)
                                    },
                                    {
                                    name: '우송중학교',
                                    content: '<div>우송중학교</div>', 
                                    latlng: new kakao.maps.LatLng(36.33532323,127.4431715)
                                    },
                                    {
                                    name: '유성중학교',
                                    content: '<div>유성중학교</div>',
                                    latlng: new kakao.maps.LatLng(36.34556424,127.334757)
                                    },
                                    {
                                    name: '중리중학교',
                                    content: '<div>중리중학교</div>', 
                                    latlng: new kakao.maps.LatLng(36.36658407,127.4273228)
                                    },
                                    {
                                    name: '충남중학교',
                                    content: '<div>충남중학교</div>', 
                                    latlng: new kakao.maps.LatLng(36.32476325,127.4438996)
                                    },
                                    {
                                    name: '한밭중학교',
                                    content: '<div>한밭중학교</div>',
                                    latlng: new kakao.maps.LatLng(36.33492815, 127.4266792)
                                    },
                                    {
                                    name: '회덕중학교',
                                    content: '<div>회덕중학교</div>',
                                    latlng: new kakao.maps.LatLng(36.40110094,127.4254661)
                                    },
                                    {
                                        name: '신탄진중학교',
                                        content: '<div>신탄진중학교</div>',
                                        latlng: new kakao.maps.LatLng(36.44756985,127.4234331)
                                        },
];




// 전역변수로 마커 배열 초기화
var markers = [];



var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
mapOption = { 
center: new kakao.maps.LatLng(36.33282919999969, 127.4056453566627), // 지도의 중심좌표
level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var drawingFlag = false; // 선이 그려지고 있는 상태를 가지고 있을 변수입니다
var moveLine; // 선이 그려지고 있을때 마우스 움직임에 따라 그려질 선 객체 입니다
var clickLine // 마우스로 클릭한 좌표로 그려질 선 객체입니다
var distanceOverlay; // 선의 거리정보를 표시할 커스텀오버레이 입니다
var dots = {}; // 선이 그려지고 있을때 클릭할 때마다 클릭 지점과 거리를 표시하는 커스텀 오버레이 배열입니다.

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 선 그리기가 시작됩니다 그려진 선이 있으면 지우고 다시 그립니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

// 마우스로 클릭한 위치입니다 
var clickPosition = mouseEvent.latLng;

// 지도 클릭이벤트가 발생했는데 선을 그리고있는 상태가 아니면
if (!drawingFlag) {

// 상태를 true로, 선이 그리고있는 상태로 변경합니다
drawingFlag = true;

// 지도 위에 선이 표시되고 있다면 지도에서 제거합니다
deleteClickLine();

// 지도 위에 커스텀오버레이가 표시되고 있다면 지도에서 제거합니다
deleteDistnce();

// 지도 위에 선을 그리기 위해 클릭한 지점과 해당 지점의 거리정보가 표시되고 있다면 지도에서 제거합니다
deleteCircleDot();

// 클릭한 위치를 기준으로 선을 생성하고 지도위에 표시합니다
clickLine = new kakao.maps.Polyline({
    map: map, // 선을 표시할 지도입니다 
    path: [clickPosition], // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
    strokeWeight: 3, // 선의 두께입니다 
    strokeColor: '#db4040', // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid' // 선의 스타일입니다
});

// 선이 그려지고 있을 때 마우스 움직임에 따라 선이 그려질 위치를 표시할 선을 생성합니다
moveLine = new kakao.maps.Polyline({
    strokeWeight: 3, // 선의 두께입니다 
    strokeColor: '#db4040', // 선의 색깔입니다
    strokeOpacity: 0.5, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid' // 선의 스타일입니다    
});

// 클릭한 지점에 대한 정보를 지도에 표시합니다
displayCircleDot(clickPosition, 0);

    
} else { // 선이 그려지고 있는 상태이면

// 그려지고 있는 선의 좌표 배열을 얻어옵니다
var path = clickLine.getPath();

// 좌표 배열에 클릭한 위치를 추가합니다
path.push(clickPosition);

// 다시 선에 좌표 배열을 설정하여 클릭 위치까지 선을 그리도록 설정합니다
clickLine.setPath(path);

var distance = Math.round(clickLine.getLength());
displayCircleDot(clickPosition, distance);
}
});

// 지도에 마우스무브 이벤트를 등록합니다
// 선을 그리고있는 상태에서 마우스무브 이벤트가 발생하면 그려질 선의 위치를 동적으로 보여주도록 합니다
kakao.maps.event.addListener(map, 'mousemove', function (mouseEvent) {

// 지도 마우스무브 이벤트가 발생했는데 선을 그리고있는 상태이면
if (drawingFlag){

// 마우스 커서의 현재 위치를 얻어옵니다 
var mousePosition = mouseEvent.latLng; 

// 마우스 클릭으로 그려진 선의 좌표 배열을 얻어옵니다
var path = clickLine.getPath();

// 마우스 클릭으로 그려진 마지막 좌표와 마우스 커서 위치의 좌표로 선을 표시합니다
var movepath = [path[path.length-1], mousePosition];
moveLine.setPath(movepath);    
moveLine.setMap(map);

var distance = Math.round(clickLine.getLength() + moveLine.getLength()), // 선의 총 거리를 계산합니다
    content = '<div class="dotOverlay distanceInfo">총거리 <span class="number">' + distance + '</span>m</div>'; // 커스텀오버레이에 추가될 내용입니다

// 거리정보를 지도에 표시합니다
showDistance(content, mousePosition);   
}             
});                 

// 지도에 마우스 오른쪽 클릭 이벤트를 등록합니다
// 선을 그리고있는 상태에서 마우스 오른쪽 클릭 이벤트가 발생하면 선 그리기를 종료합니다
kakao.maps.event.addListener(map, 'rightclick', function (mouseEvent) {

// 지도 오른쪽 클릭 이벤트가 발생했는데 선을 그리고있는 상태이면
if (drawingFlag) {

// 마우스무브로 그려진 선은 지도에서 제거합니다
moveLine.setMap(null);
moveLine = null;  

// 마우스 클릭으로 그린 선의 좌표 배열을 얻어옵니다
var path = clickLine.getPath();

// 선을 구성하는 좌표의 개수가 2개 이상이면
if (path.length > 1) {

    // 마지막 클릭 지점에 대한 거리 정보 커스텀 오버레이를 지웁니다
    if (dots[dots.length-1].distance) {
        dots[dots.length-1].distance.setMap(null);
        dots[dots.length-1].distance = null;    
    }

    var distance = Math.round(clickLine.getLength()), // 선의 총 거리를 계산합니다
        content = getTimeHTML(distance); // 커스텀오버레이에 추가될 내용입니다
        
    // 그려진 선의 거리정보를 지도에 표시합니다
    showDistance(content, path[path.length-1]);  
     
} else {

    // 선을 구성하는 좌표의 개수가 1개 이하이면 
    // 지도에 표시되고 있는 선과 정보들을 지도에서 제거합니다.
    deleteClickLine();
    deleteCircleDot(); 
    deleteDistnce();

}

// 상태를 false로, 그리지 않고 있는 상태로 변경합니다
drawingFlag = false;          
}  
});    

// 클릭으로 그려진 선을 지도에서 제거하는 함수입니다
function deleteClickLine() {
if (clickLine) {
clickLine.setMap(null);    
clickLine = null;        
}
}

// 마우스 드래그로 그려지고 있는 선의 총거리 정보를 표시하거
// 마우스 오른쪽 클릭으로 선 그리가 종료됐을 때 선의 정보를 표시하는 커스텀 오버레이를 생성하고 지도에 표시하는 함수입니다
function showDistance(content, position) {

if (distanceOverlay) { // 커스텀오버레이가 생성된 상태이면

// 커스텀 오버레이의 위치와 표시할 내용을 설정합니다
distanceOverlay.setPosition(position);
distanceOverlay.setContent(content);

} else { // 커스텀 오버레이가 생성되지 않은 상태이면

// 커스텀 오버레이를 생성하고 지도에 표시합니다
distanceOverlay = new kakao.maps.CustomOverlay({
    map: map, // 커스텀오버레이를 표시할 지도입니다
    content: content,  // 커스텀오버레이에 표시할 내용입니다
    position: position, // 커스텀오버레이를 표시할 위치입니다.
    xAnchor: 0,
    yAnchor: 0,
    zIndex: 3  
});      
}
}

// 그려지고 있는 선의 총거리 정보와 
// 선 그리가 종료됐을 때 선의 정보를 표시하는 커스텀 오버레이를 삭제하는 함수입니다
function deleteDistnce () {
if (distanceOverlay) {
distanceOverlay.setMap(null);
distanceOverlay = null;
}
}

// 선이 그려지고 있는 상태일 때 지도를 클릭하면 호출하여 
// 클릭 지점에 대한 정보 (동그라미와 클릭 지점까지의 총거리)를 표출하는 함수입니다
function displayCircleDot(position, distance) {

// 클릭 지점을 표시할 빨간 동그라미 커스텀오버레이를 생성합니다
var circleOverlay = new kakao.maps.CustomOverlay({
content: '<span class="dot"></span>',
position: position,
zIndex: 1
});

// 지도에 표시합니다
circleOverlay.setMap(map);

if (distance > 0) {
// 클릭한 지점까지의 그려진 선의 총 거리를 표시할 커스텀 오버레이를 생성합니다
var distanceOverlay = new kakao.maps.CustomOverlay({
    content: '<div class="dotOverlay">거리 <span class="number">' + distance + '</span>m</div>',
    position: position,
    yAnchor: 1,
    zIndex: 2
});

// 지도에 표시합니다
distanceOverlay.setMap(map);
}

// 배열에 추가합니다
dots.push({circle:circleOverlay, distance: distanceOverlay});
}

// 클릭 지점에 대한 정보 (동그라미와 클릭 지점까지의 총거리)를 지도에서 모두 제거하는 함수입니다
function deleteCircleDot() {
var i;

for ( i = 0; i < dots.length; i++ ){
if (dots[i].circle) { 
    dots[i].circle.setMap(null);
}

if (dots[i].distance) {
    dots[i].distance.setMap(null);
}
}

dots = [];
}

// 마우스 우클릭 하여 선 그리기가 종료됐을 때 호출하여 
// 그려진 선의 총거리 정보와 거리에 대한 도보, 자전거 시간을 계산하여
// HTML Content를 만들어 리턴하는 함수입니다
function getTimeHTML(distance) {

// 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
var walkkTime = distance / 67 | 0;
var walkHour = '', walkMin = '';

// 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
if (walkkTime > 60) {
walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + '</span>시간 '
}
walkMin = '<span class="number">' + walkkTime % 60 + '</span>분'

// 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
var bycicleTime = distance / 227 | 0;
var bycicleHour = '', bycicleMin = '';

// 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
if (bycicleTime > 60) {
bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + '</span>시간 '
}
bycicleMin = '<span class="number">' + bycicleTime % 60 + '</span>분'

// 거리와 도보 시간, 자전거 시간을 가지고 HTML Content를 만들어 리턴합니다
var content = '<ul class="dotOverlay distanceInfo">';
content += '    <li>';
content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
content += '    </li>';
content += '    <li>';
content += '        <span class="label">도보</span>' + walkHour + walkMin;
content += '    </li>';
content += '    <li>';
content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
content += '    </li>';
content += '</ul>'

return content;
}

// 지도에 마커를 생성하고 표시하는 함수
function displayMarkers() {
// 이미 마커가 지도에 표시되어 있다면 제거
if (markers.length > 0) {
for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
}
markers = []; // 마커 배열 초기화
} else { // 마커를 지도에 표시
for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        clickable: true
    });
    var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true;
    // 각 마커별로 다른 내용의 인포윈도우 생성
    var infowindow = new kakao.maps.InfoWindow({
    content: positions[i].content,
    removable : iwRemoveable
    });
    kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
    markers.push(marker); // 생성된 마커를 배열에 추가
}
}
}
function makeOverListener(map, marker, infowindow) {
return function() {
infowindow.open(map, marker);
};
}

function makeOutListener(infowindow) {
return function() {
infowindow.close();
};
}

var clusterer = new kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 2
}); // 클러스터러 전역변수로 선언


function displayClusters(){
displayMarkers();
    clusterer.addMarkers(markers); // 클러스터러에 마커들을 추가
}


$(document).ready(function() {
    var isClusterDisplayed = false;

    $('#showMarkers').click(function() {
        displayMarkers(); // 마커 표시
        isClusterDisplayed = false;
    });

    $('#showClusters').click(function() {
        if (!isClusterDisplayed) {
            displayClusters(); // 클러스터 표시
            isClusterDisplayed = true;
        } else {
            clusterer.clear(); // 클러스터 제거
            isClusterDisplayed = false;
        }
    });
});




for (var i = 0, len = areas.length; i < len; i++) {
displayArea(areas[i]);
}
