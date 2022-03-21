window.onload = function () {//不加载它出不来
    //还得使用立即执行函数
    //柱状图1
    (function () {
        //1. 初始化实例对象  echatrs.init(dom容器);
        let myChart = echarts.init(document.querySelector('.bar .chart'));
        //2. 指定配置项和数据
        let option = {
            color: ['#2f89cf'],
            // 触发
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    //坐标轴指示器，坐标轴触发有效
                    type: 'shadow'//默认为直线，可选：line，shadow
                }
            },
            //修改整个图表在盒子里面的大小
            grid: {
                left: '0%',
                right: '0%',
                top: '10px',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    // 只管x轴显示啥
                    data: ['红兵', '黄伟', '帅伦', '小虎', '城主', '一鸣', '自豪'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    //修改刻度标签 的样式
                    axisLabel: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                    //不显示坐标轴的线
                    axisLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    //修改刻度标签 的样式,从x轴复制过来。
                    axisLabel: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                    //设置y轴线的样式,数值可以不加引号，对象里面有对象
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: 2
                        }
                    },
                    //这个时修改y轴分隔线
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: 1
                        }
                    }
                }

            ],
            //重要的数据都在这里
            series: [
                {
                    name: '观看总集数',
                    type: 'bar',
                    barWidth: '35%',
                    data: [700, 502, 500, 534, 690, 530, 420],
                    //修改柱形的style
                    itemStyle: {
                        // 比如柱子圆角为5
                        barBorderRadius: 3
                    }
                }
            ]
        };
        // 3.使用刚指定的配置项和数据显示图表,给实例对象
        myChart.setOption(option);
        // 4.让图表跟随屏幕自动的去适应
        window.addEventListener('resize', function () {
            myChart.resize();//人家给提供了方法我们直接用
        })
    })();
    //柱状图2
    (function () {
        //建一个颜色数组，给条条上色用，
        let myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6', 'skyblue']
        // 1.实例化对象
        let myChart = echarts.init(document.querySelector('.bar2 .chart'));
        // 2.指定配置项和数据
        let option = {
            grid: {
                left: '22%',
                top: '10%',
                bottom: '10%',
                // containLabel: true//加上这个标签名就太靠左了
            },
            xAxis: {
                show: false//x轴显示寂寞
            },
            yAxis: [//两组数据匹配俩个柱子
                {
                    type: 'category',
                    // inverse: true,//翻转方向
                    data: ['Vue', 'Node', 'Echarts', 'JavaScript', 'CSS', 'HTML5'],
                    // 不显示y轴轴线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度线
                    axisTick: {
                        show: false
                    },
                    // 刻度标签里面的文字为白色
                    axisLabel: {
                        color: '#fff'
                    }
                },
                {
                    type: 'category',
                    data: [300, 241, 473, 53, 200, 285],
                    // 不显示y轴轴线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度线
                    axisTick: {
                        show: false
                    },
                    // 刻度标签里面的文字为白色
                    axisLabel: {
                        color: '#fff'
                    }
                },
            ],
            series: [
                //里面也是两个柱子，对于有两组数据
                //第一行数据
                {
                    name: '条',
                    type: 'bar',
                    data: [15, 20, 30, 50, 70, 80],
                    //修改第一组，柱子的样式
                    itemStyle: {
                        barBorderRadius: 20,//圆角20
                        // 此时的color可以修改柱子的颜色
                        color: function (params) {
                            // params是每个柱子对象
                            return myColor[params.dataIndex]
                        }
                    },
                    //给senes 第一个对象添加0级图层
                    yAxisIndex: 0,
                    //柱子间距
                    barCategoryGap: 50,
                    // 柱子宽度
                    barWidth: 12,
                    //图形上的文本标签
                    label: {
                        show: true,//显示
                        position: "inside",//显示位置在图形里面
                        formatter: '{c}%'//文字的显示格式，{}里的c会读取data的值，然后后面加上%
                    }
                },
                // 第二行数据
                {
                    name: '框',
                    type: 'bar',
                    barCategoryGap: 50,
                    // 柱子宽
                    barWidth: 15,
                    //给senes 第二个对象添加1级图层（1>0）改成2居然不行
                    yAxisIndex: 1,
                    data: [100, 100, 100, 100, 100, 100],
                    //柱子样式
                    itemStyle: {
                        // 没颜色填充
                        color: 'none',
                        // 边框颜色
                        borderColor: '#00c1de',
                        // 边框宽
                        borderWidth: 1,
                        // 边框圆角
                        barBorderRadius: 15
                    },
                }
            ]
        };
        // 3.把配置给实例对象
        myChart.setOption(option);
        // 4.让图表跟随屏幕自动的去适应
        window.addEventListener('resize', function () {
            myChart.resize();//人家给提供了方法我们直接用
        })
    })();
    //折线图1
    (function () {
        // --------------------------------------
        let yearData = [
            {
                year: '2020',//年份
                data: [
                    //两条数组线
                    [230, 172, 101, 134, 300, 230, 210, 120, 132,],
                    [240, 132, 151, 130, 310, 130, 230, 320, 432,]
                ]
            },
            {
                year: '2021',//年份
                data: [
                    //两条数组线
                    [230, 142, 101, 134, 340, 130, 200, 160, 132,],
                    [20, 172, 101, 134, 300, 240, 210, 140, 132,]
                ]
            }
        ];
        // ----------------------------------------
        // 1.实例化对象
        let myChart = echarts.init(document.querySelector('.line .chart'));
        // 2.指定配置项和数据
        let option = {
            // 通过这个color修改两条线的颜色
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                textStyle: {
                    color: 'red',
                    fontSize: 10
                },
                // 定位右边距离，这个10% 必须加引号（因为他不是数字）
                right: '10%'
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,//显示边框
                borderColor: '#012f4a',//边框颜色
                containLabel: true //包含刻度文字在内
            },
            // 保存数据
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,//移除轴内间距
                data: ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    show: false  //去除刻度线
                },
                axisLabel: {
                    color: '#9cf' //文本颜色
                },
                axisLine: {
                    show: false //轴线不要拉
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false  //去除刻度线
                },
                axisLabel: {
                    color: '#9cf' //文本颜色
                },
                axisLine: {
                    show: false //轴线不要拉
                },
                splitLine: {
                    lineStyle: {
                        color: "#012f4a"//分割线颜色
                    }
                }
            },
            series: [
                {
                    name: '进度',
                    type: 'line',
                    smooth: true,//是否平滑曲线
                    // data: [230, 172, 101, 134, 300, 230, 210, 120, 132,]
                    data: yearData[0].data[0]
                },
                {
                    name: '要求',
                    type: 'line',
                    smooth: true,//是否平滑曲线
                    // data: [220, 182, 191, 234, 290, 330, 310, 210, 120, 132]
                    data: yearData[0].data[1]
                }
            ]
        };
        // 3.把配置给实例对象
        myChart.setOption(option);
        // 4.让图表跟随屏幕自动的去适应
        window.addEventListener('resize', function () {
            myChart.resize();//人家给提供了方法我们直接用
        })
        // 5.点击切换效果，jquery以后再学吧
        $('.line h2').on('click', 'a', function () {
            // alert(1);
            // console.log($(this).index());
            // 点击a 之后根据当前a的索引号 找到对应的yearData的相关对象
            // console.log(yearData[$(this).index()]);
            let obj = yearData[$(this).index()];
            option.series[0].data = obj.data[0];
            option.series[1].data = obj.data[1];
            //重新渲染
            myChart.setOption(option);
        });
    })();
    //折线图2
    (function () {
        // 1.实例化对象
        let myChart = echarts.init(document.querySelector('.line2 .chart'));
        // 2.指定配置项和数据
        option = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                top: '0%',
                data: ['最小量', '基准量', '最大量'],//对应显示的示例
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: 12
                }

            },
            grid: {
                top: '30%',
                left: '10%',
                right: '10%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['第一周', '第二周', '第三周', '第四周'],
                    axisLabel: {
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,.6)',
                        }
                    }
                },

            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: { show: false },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.1)',
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                        }
                    }
                }
            ],
            series: [
                {
                    name: '最小量',//名称
                    type: 'line',
                    stack: 'Total',//层叠
                    smooth: true,//圆滑
                    lineStyle: {
                        width: 1
                    },
                    showSymbol: false,
                    areaStyle: {//填充区域
                        opacity: 0.8,//透明度
                        //渐变色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                // color: 'rgba(128, 255, 165)',
                                color: 'pink'
                            },
                            {
                                offset: 1,
                                color: 'rgba(1, 191, 236)'
                            }
                        ]),
                        shadowColor: 'rgba(0,0,0,1)',//阴影颜色
                    },

                    emphasis: {
                        focus: 'series'
                    },
                    symbol: 'roundRect',//拐点样式
                    data: [140, 232, 101, 264]
                },
                {
                    name: '基准量',
                    type: 'line',
                    stack: 'Total',//层叠
                    smooth: true,
                    lineStyle: {
                        width: 1
                    },
                    showSymbol: false,//默认不显示拐点
                    symbol: 'triangle',//拐点样式
                    symbolSize: 10,//拐点大小
                    //设置拐点颜色以及边框
                    itemStyle: {
                        // color: "red",
                        borderColor: 'rgba(211,220,107,.5)',
                        borderWidth: 12,
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgba(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 282, 111, 234]
                },
                {
                    name: '最大量',
                    type: 'line',
                    stack: 'Total',//层叠
                    smooth: true,
                    lineStyle: {
                        width: 1
                    },
                    showSymbol: false,
                    areaStyle: {//填充区域
                        opacity: 0.8,//透明度
                        //渐变色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgba(55, 162, 255)',

                            },
                            {
                                offset: .5,
                                color: 'rgba(116, 21, 219)',
                                // color: 'skyblue'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    symbol: 'pin',//拐点样式
                    symbolSize: 20,//拐点大小
                    data: [320, 132, 201, 334]
                }
            ]
        };
        // 3.把配置给实例对象
        myChart.setOption(option);
        // 4.让图表跟随屏幕自动的去适应
        window.addEventListener('resize', function () {
            myChart.resize();//人家给提供了方法我们直接用
        })
    })();
    //饼图1
    (function () {
        // 1.实例化对象
        let myChart = echarts.init(document.querySelector('.pie .chart'));
        // 2.指定配置项和数据
        option = {
            color: ['#9cf', '#0cf', '#fcf', '#ff0', '#f0f'],//每个饼子的颜色
            tooltip: {
                trigger: 'item'
            },
            // 图例-legend
            legend: {
                bottom: '1%',//距离下边
                left: 'center',
                itemWidth: 10,//小项目的宽
                itemHeight: 10,//小项目的高
                // 图例的文字样式
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12,
                },
            },
            series: [
                {
                    name: '年龄分布',//会提示，文字
                    type: 'pie',
                    radius: ['40%', '65%'], // 修改饼形图，第一个是内圆半径，第二个是外圆半径
                    center: ['50%', '40%'],//这就是他的位置咯左右居中y轴40%
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    // lable是标签的意思，也就是图形上的文字
                    label: {
                        show: false,//不让他显示
                        position: 'center',//位置在中间，没有的话，他会在饼都周围。
                    },
                    // 鼠标移动上去显示文本
                    // emphasis: {
                    //     label: {
                    //         show: true,
                    //         fontSize: '40',
                    //         fontWeight: 'bold'
                    //     }
                    // },
                    // labelLine意思是文字和饼图之间的链接线
                    labelLine: {
                        show: false,//不显示
                    },
                    data: [
                        { value: 2, name: '18-20' },
                        { value: 4, name: '20-22' },
                        { value: 3, name: '22-24' },
                        { value: 2, name: '24-26' },
                        { value: 1, name: '26-28' }
                    ]
                }
            ]
        };
        // 3.把配置给实例对象
        myChart.setOption(option);
        // 4.让图表跟随屏幕自动的去适应
        window.addEventListener('resize', function () {
            myChart.resize();//人家给提供了方法我们直接用
        })
    })();
    //雷达图-练习
    (function () {
        // 1.实例化对象
        let myChart = echarts.init(document.querySelector('.radar .chart'));
        // 2.指定配置项和数据
        option = {
            color: ['#f00', '#0f0', '#00f'],
            // legend: {},
            radar: [
                {
                    indicator: [
                        { text: 'a' },
                        { text: 'b' },
                        { text: 'c' },
                    ],
                    center: ['50%', '60%'],
                    // radius: 65,
                    startAngle: 90,
                    splitNumber: 4,
                    // shape: 'circle',
                    axisName: {
                        formatter: '【{value}】',
                        color: '#428BD4'
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['#FF3030', '#FF4500', '#FF7F50', '#FF8c00'],
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 2
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            // color: 'rgba(211, 253, 250, 0.8)'
                        },
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            // color: 'rgba(211, 253, 250, 0.8)'
                        }
                    }
                }
            ],
            legend: {
                left: 0,
                itemWidth: 13,
                innerHeight: 5,
                textStyle: {
                    color: 'rgba(255,250,250,.8)',
                }
            },
            series: [
                {
                    type: 'radar',
                    emphasis: {
                        lineStyle: {
                            width: 1
                        }
                    },
                    label: {
                        fontSize: 10,
                        show: true
                    },
                    data: [
                        {
                            value: [60, 0, 100],
                            name: 'a',
                            areaStyle: {
                                color: 'rgba(0, 228, 255, 0.6)'
                            }
                        },
                        {
                            value: [60, 25, 8],
                            name: 'b',
                            areaStyle: {
                                color: 'rgba(0, 228, 255, 0.6)'
                            }
                        }, {
                            value: [15, 30, 3],
                            name: 'c',
                            areaStyle: {
                                color: 'rgba(0, 228, 255, 0.6)'
                            }
                        },
                    ]
                }
            ]
        };
        // 3.把配置给实例对象
        myChart.setOption(option);
        // 4.让图表跟随屏幕自动的去适应
        window.addEventListener('resize', function () {
            myChart.resize();//人家给提供了方法我们直接用
        })
    })();
    //中国地图飞行航线模拟
    (function () {
        var myChart = echarts.init(document.querySelector(".map .chart"));
        var geoCoordMap = {
            上海: [121.4648, 31.2891],
            东莞: [113.8953, 22.901],
            东营: [118.7073, 37.5513],
            中山: [113.4229, 22.478],
            临汾: [111.4783, 36.1615],
            临沂: [118.3118, 35.2936],
            丹东: [124.541, 40.4242],
            丽水: [119.5642, 28.1854],
            乌鲁木齐: [87.9236, 43.5883],
            佛山: [112.8955, 23.1097],
            保定: [115.0488, 39.0948],
            兰州: [103.5901, 36.3043],
            包头: [110.3467, 41.4899],
            北京: [116.4551, 40.2539],
            北海: [109.314, 21.6211],
            南京: [118.8062, 31.9208],
            南宁: [108.479, 23.1152],
            南昌: [116.0046, 28.6633],
            南通: [121.1023, 32.1625],
            厦门: [118.1689, 24.6478],
            台州: [121.1353, 28.6688],
            合肥: [117.29, 32.0581],
            呼和浩特: [111.4124, 40.4901],
            咸阳: [108.4131, 34.8706],
            哈尔滨: [127.9688, 45.368],
            唐山: [118.4766, 39.6826],
            嘉兴: [120.9155, 30.6354],
            大同: [113.7854, 39.8035],
            大连: [122.2229, 39.4409],
            天津: [117.4219, 39.4189],
            太原: [112.3352, 37.9413],
            威海: [121.9482, 37.1393],
            宁波: [121.5967, 29.6466],
            宝鸡: [107.1826, 34.3433],
            宿迁: [118.5535, 33.7775],
            常州: [119.4543, 31.5582],
            广州: [113.5107, 23.2196],
            廊坊: [116.521, 39.0509],
            延安: [109.1052, 36.4252],
            张家口: [115.1477, 40.8527],
            徐州: [117.5208, 34.3268],
            德州: [116.6858, 37.2107],
            惠州: [114.6204, 23.1647],
            成都: [103.9526, 30.7617],
            扬州: [119.4653, 32.8162],
            承德: [117.5757, 41.4075],
            拉萨: [91.1865, 30.1465],
            无锡: [120.3442, 31.5527],
            日照: [119.2786, 35.5023],
            昆明: [102.9199, 25.4663],
            杭州: [119.5313, 29.8773],
            枣庄: [117.323, 34.8926],
            柳州: [109.3799, 24.9774],
            株洲: [113.5327, 27.0319],
            武汉: [114.3896, 30.6628],
            汕头: [117.1692, 23.3405],
            江门: [112.6318, 22.1484],
            沈阳: [123.1238, 42.1216],
            沧州: [116.8286, 38.2104],
            河源: [114.917, 23.9722],
            泉州: [118.3228, 25.1147],
            泰安: [117.0264, 36.0516],
            泰州: [120.0586, 32.5525],
            济南: [117.1582, 36.8701],
            济宁: [116.8286, 35.3375],
            海口: [110.3893, 19.8516],
            淄博: [118.0371, 36.6064],
            淮安: [118.927, 33.4039],
            深圳: [114.5435, 22.5439],
            清远: [112.9175, 24.3292],
            温州: [120.498, 27.8119],
            渭南: [109.7864, 35.0299],
            湖州: [119.8608, 30.7782],
            湘潭: [112.5439, 27.7075],
            滨州: [117.8174, 37.4963],
            潍坊: [119.0918, 36.524],
            烟台: [120.7397, 37.5128],
            玉溪: [101.9312, 23.8898],
            珠海: [113.7305, 22.1155],
            盐城: [120.2234, 33.5577],
            盘锦: [121.9482, 41.0449],
            石家庄: [114.4995, 38.1006],
            福州: [119.4543, 25.9222],
            秦皇岛: [119.2126, 40.0232],
            绍兴: [120.564, 29.7565],
            聊城: [115.9167, 36.4032],
            肇庆: [112.1265, 23.5822],
            舟山: [122.2559, 30.2234],
            苏州: [120.6519, 31.3989],
            莱芜: [117.6526, 36.2714],
            菏泽: [115.6201, 35.2057],
            营口: [122.4316, 40.4297],
            葫芦岛: [120.1575, 40.578],
            衡水: [115.8838, 37.7161],
            衢州: [118.6853, 28.8666],
            西宁: [101.4038, 36.8207],
            西安: [109.1162, 34.2004],
            贵阳: [106.6992, 26.7682],
            连云港: [119.1248, 34.552],
            邢台: [114.8071, 37.2821],
            邯郸: [114.4775, 36.535],
            郑州: [113.4668, 34.6234],
            鄂尔多斯: [108.9734, 39.2487],
            重庆: [107.7539, 30.1904],
            金华: [120.0037, 29.1028],
            铜川: [109.0393, 35.1947],
            银川: [106.3586, 38.1775],
            镇江: [119.4763, 31.9702],
            长春: [125.8154, 44.2584],
            长沙: [113.0823, 28.2568],
            长治: [112.8625, 36.4746],
            阳泉: [113.4778, 38.0951],
            青岛: [120.4651, 36.3373],
            韶关: [113.7964, 24.7028]
        };

        var XAData = [
            [{ name: "青岛" }, { name: "北京", value: 100 }],
            [{ name: "呼和浩特" }, { name: "北京", value: 100 }],
            [{ name: "深圳" }, { name: "北京", value: 100 }],
            [{ name: "沈阳" }, { name: "北京", value: 100 }],
        ];

        var XNData = [
            [{ name: "北京" }, { name: "呼和浩特", value: 100 }],
            [{ name: "北京" }, { name: "青岛", value: 100 }],
            [{ name: "北京" }, { name: "深圳", value: 100 }],
            [{ name: "北京" }, { name: "沈阳", value: 100 }],
        ];

        var YCData = [
            [{ name: "北京" }, { name: "拉萨", value: 100 }],
            [{ name: "北京" }, { name: "乌鲁木齐", value: 100 }],
            [{ name: "北京" }, { name: "上海", value: 100 }],
        ];

        var planePath =
            "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
        //var planePath = 'arrow';
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];

                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord],
                        value: dataItem[1].value
                    });
                }
            }
            return res;
        };

        var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
        var series = [];
        [
            ["西安", XAData],
            ["西宁", XNData],
            ["银川", YCData]
        ].forEach(function (item, i) {
            series.push(
                {
                    name: item[0] + " Top3",
                    type: "lines",
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: "red", //arrow箭头的颜色
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + " Top3",
                    type: "lines",
                    zlevel: 2,
                    symbol: ["none", "arrow"],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + " Top3",
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    rippleEffect: {
                        brushType: "stroke"
                    },
                    label: {
                        normal: {
                            show: true,
                            position: "right",
                            formatter: "{b}"
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        },
                        emphasis: {
                            areaColor: "#2B91B7"
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                }
            );
        });
        var option = {
            tooltip: {
                trigger: "item",
                formatter: function (params, ticket, callback) {
                    if (params.seriesType == "effectScatter") {
                        return "线路：" + params.data.name + "" + params.data.value[2];
                    } else if (params.seriesType == "lines") {
                        return (
                            params.data.fromName +
                            ">" +
                            params.data.toName +
                            "<br />" +
                            params.data.value
                        );
                    } else {
                        return params.name;
                    }
                }
            },
            legend: {
                orient: "vertical",
                top: "bottom",
                left: "right",
                data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
                textStyle: {
                    color: "#fff"
                },
                selectedMode: "multiple"
            },
            geo: {
                map: "china",
                label: {
                    emphasis: {
                        show: true,
                        color: "#fff"
                    }
                },
                // 把中国地图放大了1.2倍
                zoom: 1,
                roam: true,
                itemStyle: {
                    normal: {
                        // 地图省份的背景颜色
                        areaColor: "rgba(20, 41, 87,0.6)",
                        borderColor: "#195BB9",
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: "#0cf"
                    }
                }
            },
            series: series
        };
        myChart.setOption(option);
        // 监听浏览器缩放，图表对象调用缩放resize函数
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
};

