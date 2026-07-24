/**
 * Main JavaScript file for xetabyte_ver2 theme
 * Contains all interactive functionality for the theme
 */

jQuery(document).ready(function ($) {
  // 简单的手机版菜单功能
  function initSimpleMobileMenu() {
    const $mobileBtn = $("#mobileMenuBtn");
    const $topNavi = $("#topNavi");

    // 汉堡菜单点击事件
    $mobileBtn.on("click", function () {
      $topNavi.toggleClass("mobile-open");
      $mobileBtn.toggleClass("active");
    });

    // 点击菜单项时关闭菜单
    $topNavi.find("a").on("click", function () {
      if ($(window).width() <= 768) {
        $topNavi.removeClass("mobile-open");
        $mobileBtn.removeClass("active");
      }
    });

    // 点击菜单外部区域关闭菜单
    $(document).on("click", function (e) {
      if (
        !$(e.target).closest(".top-navi").length &&
        !$(e.target).closest(".mobile-menu-btn").length &&
        $topNavi.hasClass("mobile-open")
      ) {
        $topNavi.removeClass("mobile-open");
        $mobileBtn.removeClass("active");
      }
    });

    // 窗口大小改变时重置菜单状态
    $(window).on("resize", function () {
      if ($(window).width() > 768) {
        $topNavi.removeClass("mobile-open");
        $mobileBtn.removeClass("active");
      }
    });
  }

  // 初始化简单手机版菜单
  initSimpleMobileMenu();

  // 核心产品滑块导航
  jQuery(".main_product_slider_navigation li").click(function () {
    jQuery(".main_product_slider_navigation li").removeClass("active");
    jQuery(this).addClass("active");

    let index = jQuery(this).index();
    jQuery(".main_product_slider_item").removeClass("active");
    jQuery(".main_product_slider_item").eq(index).addClass("active");
  });

  // 核心产品滑块项目点击
  jQuery(".main_product_slider_item").click(function () {
    let index = jQuery(this).index();
    jQuery(".main_product_slider_navigation li").removeClass("active");
    jQuery(".main_product_slider_navigation li").eq(index).addClass("active");

    jQuery(".main_product_slider_item").removeClass("active");
    jQuery(this).addClass("active");
  });

  // 服务项目悬停效果
  jQuery(".service_box .service_box_item").hover(function () {
    jQuery(".service_box .service_box_item").removeClass("active");
    jQuery(this).addClass("active");
  });

  // // 客户案例滑块
  // let example_slider_num = 1;

  // // 下一个按钮
  // jQuery(".example_slider_box_next").click(function () {
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_1_active_left"
  //   );
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_2_active_left"
  //   );
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_3_active_left"
  //   );

  //   example_slider_num++;
  //   if (example_slider_num > 3) {
  //     example_slider_num = 2;
  //     jQuery(".example_slider_box_inner_slider").addClass("item_no_transition");
  //     jQuery(".example_slider_box_inner_slider").addClass(
  //       "item_" + example_slider_num + "_active_left"
  //     );
  //   }
  //   jQuery(".example_slider_box_inner_slider").addClass(
  //     "item_" + example_slider_num + "_active_left"
  //   );

  //   jQuery(".example_slider_box_navigation li").removeClass("active");
  //   jQuery(".example_slider_box_navigation li")
  //     .eq(example_slider_num - 1)
  //     .addClass("active");
  // });

  // // 上一个按钮
  // jQuery(".example_slider_box_prev").click(function () {
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_1_active_left"
  //   );
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_2_active_left"
  //   );
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_3_active_left"
  //   );

  //   example_slider_num--;
  //   if (example_slider_num < 1) {
  //     example_slider_num = 3;
  //   }
  //   jQuery(".example_slider_box_inner_slider").addClass(
  //     "item_" + example_slider_num + "_active_left"
  //   );

  //   jQuery(".example_slider_box_navigation li").removeClass("active");
  //   jQuery(".example_slider_box_navigation li")
  //     .eq(example_slider_num - 1)
  //     .addClass("active");
  // });

  // // 客户案例滑块导航点击
  // jQuery(".example_slider_box_navigation li").click(function () {
  //   let index = jQuery(this).index() + 1;
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_1_active_left"
  //   );
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_2_active_left"
  //   );
  //   jQuery(".example_slider_box_inner_slider").removeClass(
  //     "item_3_active_left"
  //   );
  //   jQuery(".example_slider_box_inner_slider").addClass(
  //     "item_" + index + "_active_left"
  //   );
  //   jQuery(".example_slider_box_navigation li").removeClass("active");
  //   jQuery(this).addClass("active");
  // });

  // 单篇文章页面的滑块功能
  if (jQuery(".main_product_slider_box").length > 0) {
    // 单篇文章页面的产品滑块导航
    jQuery(".main_product_slider_box_navigation li").click(function () {
      jQuery(".main_product_slider_box_navigation li").removeClass("active");
      jQuery(this).addClass("active");

      let index = jQuery(this).index();
      jQuery(".main_product_slider_box_inner_item").removeClass("active");
      jQuery(".main_product_slider_box_inner_item")
        .eq(index)
        .addClass("active");
    });
  }

  // 平滑滚动到指定元素
  jQuery("a[scrollTo]").click(function (e) {
    e.preventDefault();
    let target = jQuery(this).attr("scrollTo");
    let targetElement = jQuery("#" + target);

    if (targetElement.length > 0) {
      jQuery("html, body").animate(
        {
          scrollTop: targetElement.offset().top - 64, // 减去header高度
        },
        800
      );
    }
  });

  // 语言选择器功能
  jQuery("#language").change(function () {
    let selectedLanguage = jQuery(this).val();
    // 这里可以添加语言切换的逻辑
    console.log("Language changed to: " + selectedLanguage);
  });

  // 技术认证服务滑块功能
  function initTechSlider() {
    const $navigationItems = jQuery(
      ".service_content_box_tech_slider_box_navigation_item"
    );
    const $sliderImages = jQuery(
      ".service_content_box_tech_slider_box_inner img"
    );

    // 导航项目点击事件
    $navigationItems.on("mouseenter", function () {
      const index = jQuery(this).index();

      // 移除所有active类
      $navigationItems.removeClass("active");
      $sliderImages.removeClass("active");

      // 添加active类到当前项目
      jQuery(this).addClass("active");
      $sliderImages.eq(index).addClass("active");
    });

    // 自动播放功能（可选）
    let autoPlayInterval;
    let currentIndex = 0;

    function startAutoPlay() {
      autoPlayInterval = setInterval(function () {
        currentIndex = (currentIndex + 1) % $navigationItems.length;

        $navigationItems.removeClass("active");
        $sliderImages.removeClass("active");

        $navigationItems.eq(currentIndex).addClass("active");
        $sliderImages.eq(currentIndex).addClass("active");
      }, 5000); // 每5秒切换一次
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    }

    // 鼠标悬停时停止自动播放
    jQuery(".service_content_box_tech_slider_box").hover(
      function () {
        stopAutoPlay();
      },
      function () {
        startAutoPlay();
      }
    );

    // 初始化自动播放
    startAutoPlay();
  }

  // 初始化技术认证滑块
  initTechSlider();

  // 联系表单功能
  function initContactForm() {
    const $form = jQuery("#contactForm");
    const $submitSuccess = jQuery("#submitSuccess");
    const $formBody = $form.find(".form_body");
    const $submitBtn = $form.find(".submit");

    // 表单提交处理
    $form.on("submit", function (e) {
      console.log("Form submit triggered");
      e.preventDefault();

      // 验证表单
      if (!validateForm()) {
        console.log("Validation failed");
        return;
      }
      console.log("Validation passed");

      // 显示加载状态
      showLoadingState();

      // 收集表单数据
      const formData = {
        action: "submit_contact_form",
        nonce: $form.find('input[name="nonce"]').val(),
        contact_name: $form.find('input[name="contact_name"]').val(),
        contact_phone: $form.find('input[name="contact_phone"]').val(),
        contact_company: $form.find('input[name="contact_company"]').val(),
        contact_email: $form.find('input[name="contact_email"]').val(),
      };

      // 添加 reCAPTCHA 响应
      if (window.grecaptcha) {
        formData["g-recaptcha-response"] = grecaptcha.getResponse();
      }
      console.log("FormData:", formData);
      console.log("Ajax URL:", ajax_object.ajax_url);

      // 发送AJAX请求
      jQuery.ajax({
        url: ajax_object.ajax_url,
        type: "POST",
        data: formData,
        success: function (response) {
          console.log("Ajax success:", response);
          hideLoadingState();
          if (response.success) {
            showSuccessMessage();
            $form[0].reset();
            // 重置 reCAPTCHA
            if (window.grecaptcha) {
              grecaptcha.reset();
            }
          } else {
            alert(response.data || "提交失败，请稍后重试");
          }
        },
        error: function (xhr, status, error) {
          console.log("Ajax error:", status, error, xhr.responseText);
          hideLoadingState();
          alert("网络错误，请检查网络连接后重试");
        },
      });
    });

    // 表单验证
    function validateForm() {
      let isValid = true;
      const $name = $form.find('input[name="contact_name"]');
      const $phone = $form.find('input[name="contact_phone"]');
      const $email = $form.find('input[name="contact_email"]');

      // 清除之前的错误样式
      $form.find(".form_attribute").removeClass("error");

      // 验证姓名
      if (!$name.val().trim()) {
        $name.addClass("error");
        isValid = false;
      }

      // 验证电话
      if (!$phone.val().trim()) {
        $phone.addClass("error");
        isValid = false;
      } else if (!/^1[3-9]\d{9}$/.test($phone.val().trim())) {
        $phone.addClass("error");
        isValid = false;
      }

      // 验证邮箱
      if (!$email.val().trim()) {
        $email.addClass("error");
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($email.val().trim())) {
        $email.addClass("error");
        isValid = false;
      }

      // 验证 reCAPTCHA
      if (window.grecaptcha && !grecaptcha.getResponse()) {
        alert("请完成人机验证");
        isValid = false;
      }

      return isValid;
    }

    // 显示加载状态
    function showLoadingState() {
      $submitBtn.val("提交中...").prop("disabled", true);
    }

    // 隐藏加载状态
    function hideLoadingState() {
      $submitBtn.val("提交信息").prop("disabled", false);
    }

    // 显示成功消息
    function showSuccessMessage() {
      $formBody.hide();
      $submitSuccess.show();

      // 5秒后隐藏成功消息并显示表单
      setTimeout(function () {
        $submitSuccess.hide();
        $formBody.show();
      }, 5000);
    }

    // 输入时清除错误样式
    $form.find(".form_attribute").on("input", function () {
      jQuery(this).removeClass("error");
    });
  }

  // 初始化联系表单
  initContactForm();

  new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  }).init();
});
