//dropdown, notification, message, profil
$(".header-profile-card").click(function() {
    $(this).children(".dropdowns").slideToggle(500)
});
$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is(".header-profile-card") && !$(target).parents().is(".header-profile-card")) {
        $(".dropdowns").slideUp(100)
    }
})
$(".notification").click(function() {
    $(this).children(".notifications").slideToggle(500)
});
$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is(".notification") && !$(target).parents().is(".notification")) {
        $(".notifications").slideUp(100)
    }
})
$(".inbox").click(function() {
    $(this).children(".messages").slideToggle(500)
});
$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is(".inbox") && !$(target).parents().is(".inbox")) {
        $(".messages").slideUp(100)
    }
})


// create user open close

$(".registration_popup_cancel").click(function() {
    $(".registration_popup").hide();
})
$("#create_card").click(function() {
    $(".registration_popup").show();
})

//create user profile image


$(".registration_jumbotron").click(function(e) {
    if (e.target.classList.contains("profile-social-links_delete")) {
        e.target.parentNode.parentNode.parentNode.parentNode.remove();
    }
})

$("#create").click(function() {
    if ($("#registration_popup_left_profile_name").val().length > 0 && $("#registration_popup_left_profile_surname").val().length > 0 && $("#registration_popup_left_profile_nickname").val().length > 0 && $("#registration_popup_left_profile_email").val().length > 0 && $("#registration_popup_left_profile_position").val().length > 0 && $("#registration_popup_right_profile_password").val().length > 0) {
        var profile_image = document.getElementById("profile_image").getAttribute("src");
        var profile_name = document.getElementById("registration_popup_left_profile_name").value;
        var profile_surname = document.getElementById("registration_popup_left_profile_surname").value;
        var profile_position = document.getElementById("registration_popup_left_profile_position").value;
        var profile_role = document.getElementById("registration_popup_right_profile_role").value;
        var profile_card = document.createElement("div");
        var profile_card_header = document.createElement("div");
        var profile_card_image = document.createElement("img");
        var profile_card_name = document.createElement("h1");
        var profile_card_position = document.createElement("h2");
        var profile_card_role = document.createElement("span");
        var profile_social_links = document.createElement("ul");
        var profile_social_links_edit = document.createElement("li");
        var profile_social_links_edit_a = document.createElement("a");
        var profile_social_links_edit_img = document.createElement("img");
        var profile_social_links_stop = document.createElement("li");
        var profile_social_links_stop_a = document.createElement("a");
        var profile_social_links_stop_img = document.createElement("img");
        var profile_social_links_delete = document.createElement("li");
        var profile_social_links_delete_a = document.createElement("a");
        var profile_social_links_delete_img = document.createElement("img");
        document.querySelector(".registration_jumbotron").append(profile_card);
        profile_card.setAttribute("class", "profile-card");
        profile_card.append(profile_card_header);
        profile_card_header.setAttribute("class", "profile-card-header");
        profile_card_header.append(profile_card_image);
        profile_card_image.setAttribute("src", profile_image);
        profile_card_header.append(profile_card_name);
        profile_card_name.innerHTML = profile_name + " " + profile_surname;
        profile_card_header.append(profile_card_position);
        profile_card_position.innerHTML = `~ ${profile_position} ~`;
        profile_card_header.append(profile_card_role);
        profile_card_role.innerHTML = `Role: <br> ${profile_role}`;
        profile_card.append(profile_social_links);
        profile_social_links.setAttribute("class", "profile-social-links");
        profile_social_links.append(profile_social_links_edit);
        profile_social_links_edit.append(profile_social_links_edit_a);
        profile_social_links_edit_a.setAttribute("href", "profile.html");
        profile_social_links_edit_a.setAttribute("data-text", "Edit");
        profile_social_links_edit_a.append(profile_social_links_edit_img);
        profile_social_links_edit_img.setAttribute("src", "../img/svg fontawesome/Male-user-edit-icon.png");
        profile_social_links.append(profile_social_links_stop);
        profile_social_links_stop.append(profile_social_links_stop_a);
        profile_social_links_stop_a.setAttribute("href", "#");
        profile_social_links_stop_a.setAttribute("data-text", "Stop");
        profile_social_links_stop_a.append(profile_social_links_stop_img);
        profile_social_links_stop_img.setAttribute("src", "../img/svg fontawesome/deactivate.png");
        profile_social_links.append(profile_social_links_delete);
        profile_social_links_delete.append(profile_social_links_delete_a);
        profile_social_links_delete_a.setAttribute("href", "#");
        profile_social_links_delete_a.setAttribute("data-text", "Delete");
        profile_social_links_delete_a.append(profile_social_links_delete_img);
        profile_social_links_delete_img.setAttribute("src", "../img/svg fontawesome/delete.png");
        profile_social_links_delete_img.setAttribute("class", "profile-social-links_delete");
        $(".registration_popup").hide();
    }
})

//charts js

function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
}

function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice " + sliceID + "'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;

    $(id + " ." + sliceID).css({
        "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
    });

    $(id + " ." + sliceID + " span").css({
        "transform": "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
        "background-color": color
    });
}

function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var
        maxSize = 179,
        sliceID = "s" + dataCount + "-" + sliceCount;

    if (sliceSize <= maxSize) {
        addSlice(id, sliceSize, pieElement, offset, sliceID, color);
    } else {
        addSlice(id, maxSize, pieElement, offset, sliceID, color);
        iterateSlices(id, sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
    }
}

function createPie(id) {
    var
        listData = [],
        listTotal = 0,
        offset = 0,
        i = 0,
        pieElement = id + " .pie-chart__pie"
    dataElement = id + " .pie-chart__legend"

    color = [
        "cornflowerblue",
        "olivedrab",
        "orange",
        "tomato",
        "crimson",
        "purple",
        "turquoise",
        "forestgreen",
        "navy"
    ];

    color = shuffle(color);

    $(dataElement + " span").each(function() {
        listData.push(Number($(this).html()));
    });

    for (i = 0; i < listData.length; i++) {
        listTotal += listData[i];
    }

    for (i = 0; i < listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
        $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
        offset += size;
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }

    return a;
}

function createPieCharts() {
    createPie('.pieID--micro-skills');
    createPie('.pieID--categories');
    createPie('.pieID--operations');
}

createPieCharts();

//search-panel js

$(".drowpdown_scrool").click(function() {
    $(".search").animate({ height: '160px' });
    $(".drowpdown_scrool").css("transform", "rotate(180deg)");
    if ($(".search").height() == 120) {
        $(".search").animate({ height: '80px' });
        $(".drowpdown_scrool").css("transform", "rotate(0deg)");
    }
})


//expences and incomes creation 

$(".expences-jumbotron-create-popup img").click(function() {
    $(".expences-jumbotron-create-popup").hide();
});
$("#create_expences").click(function() {
    $(".expences-jumbotron-create-popup").show();
});

$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is("#create_expences") && !$(target).parents().is("#create_expences") && !$(target).is(".expences-jumbotron-create-popup") && !$(target).parents().is(".expences-jumbotron-create-popup")) {
        $(".expences-jumbotron-create-popup").hide();
    }
});


//expences  creation editing

$(".expences-jumbotron-edit-popup img").click(function() {
    $(".expences-jumbotron-edit-popup").hide();
});
$(".edit_expences").click(function() {
    $(".expences-jumbotron-edit-popup").show();
});

$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is(".edit_expences") && !$(target).parents().is(".edit_expences") && !$(target).is(".expences-jumbotron-edit-popup") && !$(target).parents().is(".expences-jumbotron-edit-popup")) {
        $(".expences-jumbotron-edit-popup").hide();
    }
})

// expences confirmation button

$(".confirm-expences").click(function(e) {
    $(".warning-popup").show();
    $(".warning-popup p").text("Are you sure to confirm this request?");
    var target = e.target.parentNode.parentNode.parentNode;
    $(".transition").click(function() {
        if ($(this).hasClass('yes')) {
            $(target).children().children(".danger").text("Confirmed");
            $(target).children().children(".danger").addClass('success');
            $(target).children().children(".danger").removeClass('danger');
            $(target).children().children().children(".edit_expences").attr('style', 'cursor: not-allowed')
            $(target).children().children().children(".edit_expences").removeClass('edit_expences');
            $(e.target).parent().html("<button  class='paid-expences' style='width: 100px; height:40px; background-color:#007bff; color:white; border: none; outline:none; cursor:pointer;'>Paid</button>")
            $('.warning-popup').hide();
        }
        if ($(this).hasClass('no')) {
            $('.warning-popup').hide();
        }
        $(".paid-expences").click(function() {
            $(".warning-popup").show();
            $(".warning-popup p").text("Did you paid this request?");
            $(".transition").click(function() {
                if ($(this).hasClass('yes')) {
                    $(".warning-popup").hide();
                }
                if ($(this).hasClass('no')) {
                    $(".warning-popup").hide();
                }
            })
        })
    })

});



//expences delete button
$(".delete-expences").click(function(e) {
    $(".warning-popup").show();
    $(".warning-popup p").text("Are you sure to delete this request?");
    $(".transition").click(function() {
        if ($(this).hasClass('yes')) {
            $(e.target).parent().parent().parent().remove();
            $(".warning-popup").hide();
        }
        if ($(this).hasClass('no')) {
            $(".warning-popup").hide();
        }
    })
});
//incomes creation 

$(".incomes-jumbotron-create-popup img").click(function() {
    $(".incomes-jumbotron-create-popup").hide();
});
$("#create_incomes").click(function() {
    $(".incomes-jumbotron-create-popup").show();
});

$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is("#create_incomes") && !$(target).parents().is("#incomes") && !$(target).is(".incomes-jumbotron-create-popup") && !$(target).parents().is(".incomes-jumbotron-create-popup")) {
        $(".incomes-jumbotron-create-popup").hide();
    }
})

//incomes  creation editing

$(".incomes-jumbotron-edit-popup img").click(function() {
    $(".incomes-jumbotron-edit-popup").hide();
});
$(".edit_incomes").click(function() {
    $(".incomes-jumbotron-edit-popup").show();
});

$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is(".edit_incomes") && !$(target).parents().is(".edit_incomes") && !$(target).is(".incomes-jumbotron-edit-popup") && !$(target).parents().is(".incomes-jumbotron-edit-popup")) {
        $(".incomes-jumbotron-edit-popup").hide();
    }
})



//incomes delete button
$(".delete-incomes").click(function(e) {
    $(".warning-popup").show();
    $(".warning-popup p").text("Are you sure to delete this request?");
    $(".transition").click(function() {
        if ($(this).hasClass('yes')) {
            $(e.target).parent().parent().parent().remove();
            $(".warning-popup").hide();
        }
        if ($(this).hasClass('no')) {
            $(".warning-popup").hide();
        }
    })
});


//received incomes popup

$(".received-incomes").click(function() {
    $(".warning-popup").show();
    $(".warning-popup p").text("Did You Received This Amount?");
    $(".transition").click(function() {
        if ($(this).hasClass('yes')) {
            $(".warning-popup").hide();
        }
        if ($(this).hasClass('no')) {
            $(".warning-popup").hide();
        }
    })
});

//comment incomes and expences
$(".comment-incomes").click(function() {
    $(".warning-popup").show();
    $(".warning-popup p").text("Do you want to comment this request?");
    $(".transition").click(function() {
        if ($(this).hasClass('yes')) {
            $(".warning-popup").hide();
            $(".comment-popup").show();
        }
        if ($(this).hasClass('no')) {
            $(".warning-popup").hide();
        }
    })
});
$(".comment-expences").click(function() {
    $(".warning-popup").show();
    $(".warning-popup p").text("Do you want to comment this request?");
    $(".transition").click(function() {
        if ($(this).hasClass('yes')) {
            $(".warning-popup").hide();
            $(".comment-popup").show();
        }
        if ($(this).hasClass('no')) {
            $(".warning-popup").hide();
        }
    })
});

$(".comment-popup img").click(function() {
    $(".comment-popup").hide();
});

//cash close js
$(".cash_status_button").click(function(e) {
        var target = e.target.parentNode.parentNode.parentNode;
        var cash_status_text = $(target).children().children(".cash_status").text();
        if (cash_status_text === "Open") {
            $(".warning-popup").show();
            $(".warning-popup p").text("Are you sure to close this request?");
            $(".transition").click(function() {
                if ($(this).hasClass('yes')) {
                    $(".warning-popup").hide();
                    $(target).children().children(".cash_status").text("Closed");
                    $(target).children().children(".cash_status").addClass("info");
                    $(target).children().children(".cash_status").removeClass("danger");
                    $(target).children().children().children(".cash_status_button").text("Open");
                    $(target).attr("style", "background-color:#babdc2;")
                    $(target).children().children().children(".cash_status_button_hide").attr("style", "display:none;");
                    $(target).children().children().children(".cash_hide").attr("style", "visibility:hidden;");
                    cash_status_text = "Closed";
                }
                if ($(this).hasClass('no')) {
                    $(".warning-popup").hide();
                }
            })

        }
        if (cash_status_text === "Closed") {
            $(".warning-popup").show();
            $(".warning-popup p").text("Are you sure to open this request?");
            $(".transition").click(function() {
                if ($(this).hasClass('yes')) {
                    $(".warning-popup").hide();
                    $(target).children().children(".cash_status").text("Open");
                    $(target).children().children(".cash_status").addClass("danger");
                    $(target).children().children(".cash_status").removeClass("info");
                    $(target).children().children().children(".cash_status_button").text("Close");
                    $(target).attr("style", "background-color:white;");
                    $(target).children().children().children(".cash_hide").attr("style", "visibility:visible;");
                    cash_status_text = "Open";
                }
                if ($(this).hasClass('no')) {
                    $(".warning-popup").hide();
                }
            })

        }

    })
    // $(".cash_status_button").click(function(e) {
    //     var cash_status_text = $(".cash_status").text()
    //     if (cash_status_text === "Open") {
    //         $(".warning-popup").show();
    //         $(".warning-popup p").text("Are you sure to close this request?");
    //         $(".transition").click(function() {
    //             if ($(this).hasClass('yes')) {
    //                 $(".warning-popup").hide();
    //                 $(".cash_status").text("Closed");
    //                 $(".cash_status").addClass("info");
    //                 $(".cash_status").removeClass("danger");
    //                 $(".cash_status_button").text("Open");
    //                 $(".delete-cash").attr("style", "cursor: not-allowed;")
    //                 cash_status_text = "Closed";
    //             }
    //             if ($(this).hasClass('no')) {
    //                 $(".warning-popup").hide();
    //             }

//         })
//     }
//     if (cash_status_text === "Closed") {
//         $(".warning-popup").show();
//         $(".warning-popup p").text("Are you sure to open this request?");
//         $(".transition").click(function() {
//             if ($(this).hasClass('yes')) {
//                 $(".warning-popup").hide();
//                 $(".cash_status").text("Open");
//                 $(".cash_status").addClass("danger");
//                 $(".cash_status").removeClass("info");
//                 $(".cash_status_button").text("Close");
//                 cash_status_text = "Open";
//             }
//             if ($(this).hasClass('no')) {
//                 $(".warning-popup").hide();
//             }

//         })
//     }
// })

//delete cash 

$(".delete-cash").click(function(e) {
    $(".warning-popup").show();
    $(".warning-popup p").text("Are you sure to delete this request?");
    $(".transition").click(function() {
        if ($(this).hasClass('yes')) {
            $(e.target).parent().parent().parent().remove();
            $(".warning-popup").hide();
        }
        if ($(this).hasClass('no')) {
            $(".warning-popup").hide();
        }
    })
});

//edit cash 
$(".cash-jumbotron-edit-popup img").click(function() {
    $(".cash-jumbotron-edit-popup").hide();
});
$(".edit_cash").click(function() {
    $(".cash-jumbotron-edit-popup").show();
});

$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is(".edit_cash") && !$(target).parents().is(".edit_cash") && !$(target).is(".cash-jumbotron-edit-popup") && !$(target).parents().is(".cash-jumbotron-edit-popup")) {
        $(".cash-jumbotron-edit-popup").hide();
    }
})