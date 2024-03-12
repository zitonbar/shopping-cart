// // function counterNum() {
// //     const counterItems = document.querySelectorAll('.counter-item');

// //     counterItems.forEach(function(item) {
// //         let clickCount = 0;
// //         const btnIncrease = item.querySelector('.btnIncrease');
// //         const btnReduce = item.querySelector('.btnReduce');
// //         const counterText = item.querySelector('.counter-text');

// //         btnIncrease.addEventListener('click', function() {
// //             clickCount++;
// //             counterText.textContent = clickCount;
// //         });

// //         btnReduce.addEventListener('click', function() {
// //             if (clickCount > 0) {
// //                 clickCount--;
// //                 counterText.textContent = clickCount;
// //             }
// //         });
// //     });
// // }

// // counterNum();

// // let data = {};


// 加入此段落，等待 HTML 文件載入完成後執行相關操作
document.addEventListener('DOMContentLoaded', function () {
    // 獲取目標元素
    let productList = document.getElementById('productList');

    // 使用 fetch 從 data.json 中取得資料
    fetch('../../assets/JSON/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok!');
            }
            return response.json();
        })
        .then(data => {
            // 遍歷 JSON 資料
            data.Products.forEach(function (product) {
                // 創建新的 li 元素
                let productItem = document.createElement('li');
                productItem.className = "list-group-item text-center";

                // 使用 innerHTML 填充內容
                productItem.innerHTML = `
                    <a class="btn btn-secondary" data-bs-toggle="collapse" href="#${product.Name.replace(/\s+/g, '-')}" role="button" aria-expanded="false" aria-controls="${product.Name.replace(/\s+/g, '-')}">
                        <p class="fs-3 fw-bold">${product.Name}</p>
                        <span class="text-light">${product.Introduce}</span>
                    </a>
                    <div class="row mt-2">
                        <div class="col">
                            <div class="collapse multi-collapse" id="${product.Name.replace(/\s+/g, '-')}">
                                <ul class="list-group text-start text-sm-center">
                                    <!-- 這裡根據商品內容動態渲染 li 元素 -->
                                </ul>
                            </div>
                        </div>
                    </div>
                `;

                // 將 productItem 插入到商品清單中
                productList.appendChild(productItem);

                // 獲取剛剛插入的 ul 元素，即每個商品的子清單
                let itemSubList = productItem.querySelector('.list-group');

                // 遍歷商品的子項目
                product.Item.forEach(function (item) {
                    // 創建新的 li 元素
                    let listItem = document.createElement('li');
                    listItem.className = "list-group-item list-group-item-action d-flex justify-content-between justify-content-sm-around align-items-center";

                    // 使用 innerHTML 填充內容
                    listItem.innerHTML = `
                        <div>
                            <p class="fw-bold fs-5 mb-0">${item.ItemName}</p>
                            <span class="text-black-50">${item.ItemIntroduce}</span>
                        </div>
                        <div class="d-flex align-items-center counter-item">
                            <button class="btn btn-primary btnIncrease">+</button>
                            <p class="mx-2 my-auto counter-text">0</p>
                            <button class="btn btn-primary btnReduce">-</button>
                        </div>
                    `;

                    // 將 listItem 插入到子清單中
                    itemSubList.appendChild(listItem);
                });
            });

            counterNum();
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});

function counterNum() {
    const counterItems = document.querySelectorAll('.counter-item');

    counterItems.forEach(function(item) {
        let clickCount = 0;
        const btnIncrease = item.querySelector('.btnIncrease');
        const btnReduce = item.querySelector('.btnReduce');
        const counterText = item.querySelector('.counter-text');

        btnIncrease.addEventListener('click', function() {
            clickCount++;
            counterText.textContent = clickCount;
        });

        btnReduce.addEventListener('click', function() {
            if (clickCount > 0) {
                clickCount--;
                counterText.textContent = clickCount;
            }
        });
    });
}
