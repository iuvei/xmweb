var sendbindcode="/member/center/sendbindcode";var sendcode="/member/center/sendcode";var checkMailorMobile="/member/center/checkMailorMobile";var editMailorMobile="/member/center/editMailorMobile";var bindMailorMobile="/member/center/bindMailorMobile";if(typeof window.IS_MOBILE!=="undefined"){var sendbindcode="/mobile/member/center/sendbindcode";var sendcode="/mobile/member/center/sendcode";var checkMailorMobile="/mobile/member/center/checkMailorMobile";var editMailorMobile="/mobile/member/center/editMailorMobile";var bindMailorMobile="/mobile/member/center/bindMailorMobile"}var wait=60;var cce;$(document).ready(function(){$(".get_mail").click(function(){var a=$.trim($("#txtEmail").val());$.get(sendbindcode,{type:1,destination:a},function(b){if(b.success){dialog.alert("消息","验证码已发至您邮箱中，若找不到请在垃圾邮箱翻翻哦~");wait=60;clearTimeout(cce);time_2($(".get_mail"))}else{dialog.error("消息","邮件发送错误，请重新发送或联系客服！")}})});$(".get_unbindmail").click(function(){var a="unbind";$.get(sendcode,{type:1,template:a},function(b){if(b.success){dialog.alert("消息","验证码已发至您邮箱中，若找不到请在垃圾邮箱翻翻哦~");wait=60;clearTimeout(cce);time_2($(".get_unbindmail"))}else{dialog.error("消息","邮件发送错误，请重新发送或联系客服！")}})});$("#bindmail").click(function(){$("#popup-verifyemail").dialog({title:"绑定邮箱",width:620})});$("#editmail").click(function(){$("#popup-verifyeditemail").dialog({title:"修改邮箱",width:620})});$("#editpwd").click(function(){$("#popup-verifycontact").dialog({title:"修改密码",width:620})})});function time_2(a){if(wait==0){a.removeAttr("disabled");a.val("点击获取");wait=60}else{a.attr("disabled","disabled");a.val("("+wait+")秒后重新获取验证码");wait--;cce=setTimeout(function(){time_2(a)},1000)}}function checkUserMail(){var b=$.trim($("#txtEmail").val());var a=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;if(b==""){dialog.error("消息","用户邮箱不能为空！");return false}if(!a.test(b)){dialog.error("消息","邮箱格式不对！");return false}$("#btnCheckMail").attr("disabled","disabled");$("#btnCheckMail").val("提交中，请等待...");$.get(checkMailorMobile,{type:1,usermail:b},function(c){if(c.success){dialog.alert("消息","验证码已发至您邮箱中，若找不到请在垃圾邮箱翻翻哦~");$("#mailPage").hide();$("#mailCodePage").show();$("#btnCheckMail").hide();$("#btnCheckMailCode").show();$(".step1").removeClass("active");$(".step2").addClass("active");wait=60;clearTimeout(cce);time_2($(".get_mail"))}else{dialog.alert("消息",c.message);$("#btnCheckMail").removeAttr("disabled");$("#btnCheckMail").val("下一步")}})}function bindMail(){var a=$.trim($("#txtEmailCode").val());if(a==""){dialog.error("消息","验证码不能为空！");return false}$("#btnCheckMailCode").attr("disabled","disabled");$("#btnCheckMailCode").val("提交中，请等待...");$.get(bindMailorMobile,{type:1,code:a,usermail:$.trim($("#txtEmail").val())},function(b){if(b.success){if(typeof window.IS_MOBILE!=="undefined"){dialog.alert("消息","验证成功， 绑定邮箱成功！");window.location.href="#/center/index/2/?";return}dialog.alert("消息","绑定邮箱成功！",null,"/member/center/index")}else{dialog.error("消息",b.message);$("#btnCheckMailCode").removeAttr("disabled");$("#btnCheckMailCode").val("下一步")}})}function editEmail(){var a=$.trim($("#txtEmailCode1").val());if(a==""){dialog.error("消息","验证码不能为空！");return false}$("#btnEditMail").attr("disabled","disabled");$("#btnEditMail").val("提交中，请等待...");$.get(editMailorMobile,{type:1,usermail:"",code:a},function(b){if(b.success){if(typeof window.IS_MOBILE!=="undefined"){dialog.alert("消息","验证成功， 请修改邮箱！");window.location.href="#/center/index/2/?";return}$("#popup-verifyeditemail").dialog("close");$("#popup-verifyemail").dialog({title:"绑定邮箱",width:620})}else{dialog.error("消息",b.message);$("#btnEditMail").removeAttr("disabled");$("#btnEditMail").val("下一步")}})};