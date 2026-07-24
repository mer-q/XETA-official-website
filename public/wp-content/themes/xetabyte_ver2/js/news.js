/**
 * 新闻列表页面 JavaScript 功能
 */

jQuery(document).ready(function ($) {
  let currentPage = 1;
  let currentCategory = getCurrentCategory();
  let isLoading = false;

  // 获取当前分类参数
  function getCurrentCategory() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("category") || "all";
  }

  // 加载更多功能
  $("#load-more-btn").on("click", function () {
    if (isLoading) return;

    loadMoreNews();
  });

  // 加载更多新闻函数
  function loadMoreNews() {
    isLoading = true;
    currentPage++;

    // 显示加载状态
    $("#load-more-btn").prop("disabled", true).text("加载中...");

    // AJAX 请求
    $.ajax({
      url: ajax_object.ajax_url,
      type: "POST",
      data: {
        action: "load_more_news",
        page: currentPage,
        category: currentCategory,
        nonce: ajax_object.nonce,
      },
      success: function (response) {
        if (response.success && response.data.html) {
          // 添加新内容到列表
          $(".news_list").append(response.data.html);

          // 重新应用动画
          applyFadeInAnimation();

          // 检查是否还有更多内容
          if (!response.data.has_more) {
            $("#load-more-btn").hide();
          } else {
            $("#load-more-btn").prop("disabled", false).text("加载更多");
          }
        } else {
          // 没有更多内容
          $("#load-more-btn").hide();
        }
      },
      error: function () {
        alert("加载失败，请重试");
        $("#load-more-btn").prop("disabled", false).text("加载更多");
      },
      complete: function () {
        isLoading = false;
      },
    });
  }

  // 应用淡入动画
  function applyFadeInAnimation() {
    $(".news_item").each(function (index) {
      if (!$(this).hasClass("animated")) {
        $(this).addClass("animated");
        $(this).css({
          opacity: "0",
          transform: "translateY(20px)",
          "animation-delay": index * 0.1 + "s",
        });

        setTimeout(() => {
          $(this).css({
            opacity: "1",
            transform: "translateY(0)",
            transition: "all 0.6s ease",
          });
        }, 100);
      }
    });
  }

  // 搜索功能（可选）
  function initSearch() {
    const searchInput = $(
      '<input type="text" placeholder="搜索新闻..." class="news_search_input">'
    );
    const searchBtn = $('<button class="news_search_btn">搜索</button>');

    $(".news_category_navigation").after(
      $('<div class="news_search_box"></div>')
        .append(searchInput)
        .append(searchBtn)
    );

    searchBtn.on("click", function () {
      const searchTerm = searchInput.val().trim();
      if (searchTerm) {
        searchNews(searchTerm);
      }
    });

    searchInput.on("keypress", function (e) {
      if (e.which === 13) {
        searchBtn.click();
      }
    });
  }

  // 搜索新闻函数
  function searchNews(searchTerm) {
    $(".news_item").each(function () {
      const title = $(this).find(".news_item_title").text().toLowerCase();
      const excerpt = $(this).find(".news_item_excerpt").text().toLowerCase();

      if (
        title.includes(searchTerm.toLowerCase()) ||
        excerpt.includes(searchTerm.toLowerCase())
      ) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // 初始化搜索功能（如果需要）
  // initSearch();

  // 滚动到顶部功能
  function initScrollToTop() {
    const scrollBtn = $('<button class="scroll_to_top_btn">↑</button>');
    $("body").append(scrollBtn);

    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        scrollBtn.fadeIn();
      } else {
        scrollBtn.fadeOut();
      }
    });

    scrollBtn.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
    });
  }

  // 初始化滚动到顶部
  initScrollToTop();

  // 图片懒加载
  function initLazyLoading() {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              observer.unobserve(img);
            }
          }
        });
      });

      $(".news_item_image img").each(function () {
        if ($(this).hasClass("lazy")) {
          imageObserver.observe(this);
        }
      });
    }
  }

  // 初始化懒加载
  initLazyLoading();

  // 页面加载完成后的初始化
  applyFadeInAnimation();
});
