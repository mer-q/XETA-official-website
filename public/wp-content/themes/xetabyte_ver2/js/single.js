/**
 * Single page JavaScript file for xetabyte_ver2 theme
 * Contains functionality specific to single post pages
 */

jQuery(document).ready(function ($) {
  // 单篇文章页面的产品滑块功能
  initSinglePageSlider();

  // 特色图片处理
  initFeaturedImage();

  /**
   * 初始化单篇文章页面的滑块功能
   */
  function initSinglePageSlider() {
    const $sliderBox = $(".main_product_slider_box");

    if ($sliderBox.length === 0) return;

    const $navigation = $sliderBox.find(
      ".main_product_slider_box_navigation li"
    );
    const $items = $sliderBox.find(".main_product_slider_box_inner_item");

    // 导航点击事件
    $navigation.click(function () {
      const index = $(this).index();

      // 更新导航状态
      $navigation.removeClass("active");
      $(this).addClass("active");

      // 更新滑块项目状态
      $items.removeClass("active");
      $items.eq(index).addClass("active");

      // 添加切换动画效果 - 简单的淡入淡出
      $items.eq(index).fadeIn(400);
    });

    // 自动播放功能（可选）
    if ($navigation.length > 1) {
      let autoPlayInterval = setInterval(function () {
        const currentIndex = $navigation.filter(".active").index();
        const nextIndex = (currentIndex + 1) % $navigation.length;

        $navigation.eq(nextIndex).click();
      }, 5000); // 5秒自动切换

      // 鼠标悬停时暂停自动播放
      $sliderBox.hover(
        function () {
          clearInterval(autoPlayInterval);
        },
        function () {
          autoPlayInterval = setInterval(function () {
            const currentIndex = $navigation.filter(".active").index();
            const nextIndex = (currentIndex + 1) % $navigation.length;
            $navigation.eq(nextIndex).click();
          }, 5000);
        }
      );
    }
  }

  /**
   * 初始化特色图片功能
   */
  function initFeaturedImage() {
    const $introBox = $(".inner_page_intro_box");
    const backgroundImage = $introBox.css("background-image");

    if (backgroundImage && backgroundImage !== "none") {
      // 添加图片加载完成后的效果
      const img = new Image();
      img.onload = function () {
        $introBox.addClass("image-loaded");

        // 添加渐变遮罩效果
        if (!$introBox.find(".image-overlay").length) {
          $introBox.append('<div class="image-overlay"></div>');
        }
      };

      // 提取图片URL
      const urlMatch = backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/);
      if (urlMatch) {
        img.src = urlMatch[1];
      }
    } else {
      // 如果没有特色图片，添加默认背景
      $introBox.addClass("no-featured-image");
    }
  }

  /**
   * 响应式处理
   */
  function handleResponsive() {
    const windowWidth = $(window).width();

    if (windowWidth <= 768) {
      // 移动端优化
      $(".main_product_slider_box").addClass("mobile-view");

      // 触摸滑动支持
      let startX = 0;
      let endX = 0;

      $(".main_product_slider_box_inner").on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].clientX;
      });

      $(".main_product_slider_box_inner").on("touchend", function (e) {
        endX = e.originalEvent.changedTouches[0].clientX;
        handleSwipe();
      });

      function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
          const currentIndex = $(
            ".main_product_slider_box_navigation li.active"
          ).index();

          if (diff > 0) {
            // 向左滑动，显示下一个
            const nextIndex =
              (currentIndex + 1) %
              $(".main_product_slider_box_navigation li").length;
            $(".main_product_slider_box_navigation li").eq(nextIndex).click();
          } else {
            // 向右滑动，显示上一个
            const prevIndex =
              currentIndex === 0
                ? $(".main_product_slider_box_navigation li").length - 1
                : currentIndex - 1;
            $(".main_product_slider_box_navigation li").eq(prevIndex).click();
          }
        }
      }
    } else {
      $(".main_product_slider_box").removeClass("mobile-view");
    }
  }

  // 窗口大小改变时重新处理响应式
  $(window).resize(function () {
    handleResponsive();
  });

  // 初始化响应式处理
  handleResponsive();

  /**
   * 性能优化：懒加载和防抖
   */
  function optimizePerformance() {
    // 使用Intersection Observer API优化滚动性能
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      });

      // 观察滑块项目
      $(".main_product_slider_box_inner_item").each(function () {
        observer.observe(this);
      });
    }
  }

  // 初始化性能优化
  optimizePerformance();

  /**
   * 错误处理
   */
  function handleErrors() {
    // 图片加载失败处理
    $(".inner_page_intro_box").on("error", function () {
      $(this).addClass("image-error");
      console.warn("Featured image failed to load");
    });

    // 滑块初始化失败处理
    if (
      $(".main_product_slider_box").length > 0 &&
      $(".main_product_slider_box_navigation li").length === 0
    ) {
      console.warn("Slider navigation not found");
    }
  }

  // 初始化错误处理
  handleErrors();

  // 页面加载完成后的回调
  $(window).on("load", function () {
    // 确保所有资源加载完成
    $(".inner_page").addClass("fully-loaded");

    // 触发自定义事件
    $(document).trigger("singlePageReady");
  });
});
