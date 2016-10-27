<template>
  <div class="main-container">
    <header id="header">
      <ul id="swiper-nav">
          <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
      </ul>
    </header>
    <section>
      <div class="grop">
        <ul>
          <li v-for="ix in list">
            <img v-bind:src="ix.img" v-bind:alt="ix.title" v-link="{path:ix.path}"/>
            <i>{{ix.title}}</i>
          </li>
        </ul>
      </div>
      <div class="lbt">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <p>下拉刷新</p>
                  <li v-for="ns in news">
                    <dl>
                      <dt>
                        <h3>{{ns.title}}</h3>
                        <i>{{{ns.tips}}}</i>
                      </dt>
                      <dd><img v-bind:src="ns.img" alt=""></dd>
                    </dl>
                  </li>
                  <p>上拉加载</p>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
    var Vue = require('../libs/vue.js');
    var VueResource = require('../libs/vue-resource.js');
    var iScroll = require('../libs/iscroll-probe.js');
    var Swiper = require('../libs/swiper-3.3.1.min.js');
    require('../libs/swiper-3.3.1.min.css');
    var mySwiper;
    var myscroll;
    var myscroll1;
    var cz;
    Vue.use(VueResource);

    function jiazai(that) {
        myscroll1.scrollTo(0, -35);
        myscroll1.on('scrollEnd', function() {
            if (myscroll1.y > -35) {
                that.$http.get('/zhixiao/indexnew')
                    .then((res) => {
                        that.news = res.data.data.concat(that.news);
                        Vue.nextTick(function() {
                            myscroll1.refresh();
                            myscroll1.scrollTo(0, -35);
                        });
                    });
            }
            cz = myscroll1.maxScrollY - myscroll1.y;
            if (cz >= 0) {
                that.$http.get('/zhixiao/indexnew')
                    .then((res) => {
                        that.news = that.news.concat(res.data.data);
                        Vue.nextTick(function() {
                            myscroll1.refresh();
                            myscroll1.scrollTo(0, myscroll1.maxScrollY + 35);
                        });
                    });
            }
        });
    }

    export default {
        data() {
            return {
                list: [],
                news: [],
                curIndex: 0,
                indexNav: ['推荐', '搞笑', '健康', '情感', '良性', '猎奇', '励志', '育儿', '科技', '汽车']
            }
        },

        ready: function() {
            var that = this;
            this.$http.get('/zhixiao/indexnav')
                .then((res) => {
                    this.list = res.data.data;
                    this.news = res.data.news;

                    myscroll = new iScroll("#header", {
                        scrollX: true,
                        preventDefault: false
                    });

                    setTimeout(function() {
                        myscroll1 = new iScroll(".swiper-slide-active", {
                            scrollY: true,
                            preventDefault: false
                        });
                        jiazai(that);
                    }, 500);

                    mySwiper = new Swiper('.swiper-container', {
                        onSlideChangeStart: function(swiper) {
                            that.curIndex = mySwiper.activeIndex;
                            if (that.curIndex >= 3 && that.curIndex <= 5) {
                                myscroll.options.startX = -(that.curIndex - 2) * 66;
                            }
                            if (that.curIndex < 3) {
                                myscroll.options.startX = 0;
                            }
                            if (that.curIndex > 5) {
                                myscroll.options.startX = -264;
                            }
                            myscroll = new iScroll("#header", {
                                startX: myscroll.options.startX,
                                scrollX: true,
                                preventDefault: false
                            });
                            myscroll1 = new iScroll(".swiper-slide-active", {
                                scrollY: true,
                                preventDefault: false
                            });
                            jiazai(that);
                        }
                    })
                });
        },

        methods: {
            switchSwiper(index) {
                this.curIndex = index;
                mySwiper.slideTo(index);
            }
        }
    }
</script>
