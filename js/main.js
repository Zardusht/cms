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

// $("#create").click(function() {
//         var profile_image = document.getElementById("profile_image").getAttribute("src")
//         console.log(profile_image)
//     })
// var all_required_inputs = $(":input").attr("required", true);
// $("#create").click(function() {
//     console.log(all_required_inputs)
// })

// $("#create").click(function() {
//     var profile_image = document.getElementById("profile_image").getAttribute("src");
//     var profile_name = document.getElementById("registration_popup_left_profile_name").value;
//     var profile_surname = document.getElementById("registration_popup_left_profile_surname").value;
//     var profile_position = document.getElementById("registration_popup_left_profile_position").value;
//     var profile_role = document.getElementById("registration_popup_right_profile_role").value;
//     var profile_card = document.createElement("div");
//     profile_card.setAttribute("class", "profile-card");
//     var profile_card_header = document.createElement("div");
//     profile_card_header.setAttribute("class", "profile-card-header");
//     var profile_card_image = document.createElement("img");
//     profile_card_image.setAttribute("src", profile_image);
//     var profile_card_name = document.createElement("h1");
//     profile_card_name.innerHTML = profile_name + " " + profile_surname;
//     var profile_card_position = document.createElement("h2");
//     profile_card_position.innerHTML = `~ ${profile_position} ~`;
//     var profile_card_role = document.createElement("span");
//     profile_card_role.innerHTML = `Role: <br> ${profile_role}`
//     var profile_social_links = document.createElement("ul");
//     profile_social_links.setAttribute("class", "profile-social-links");
//     var profile_social_links_edit = document.createElement("li");
//     var profile_social_links_edit_a = document.createElement("a");
//     profile_social_links_edit_a.setAttribute("href", "#");
//     profile_social_links_edit_a.setAttribute("data-text", "Edit");
//     var profile_social_links_edit_img = document.createElement("img");
//     profile_social_links_edit_img.setAttribute("src", "../img/svg fontawesome/Male-user-edit-icon.png")
//     var profile_social_links_stop = document.createElement("li");
//     var profile_social_links_stop_a = document.createElement("a");
//     profile_social_links_stop_a.setAttribute("href", "#");
//     profile_social_links_stop_a.setAttribute("data-text", "Stop");
//     var profile_social_links_stop_img = document.createElement("img");
//     profile_social_links_stop_img.setAttribute("src", "../img/svg fontawesome/deactivate.png");
//     var profile_social_links_delete = document.createElement("li");
//     var profile_social_links_delete_a = document.createElement("a");
//     profile_social_links_delete_a.setAttribute("href", "#");
//     profile_social_links_delete_a.setAttribute("data-text", "Delete");
//     var profile_social_links_delete_img = document.createElement("img");
//     profile_social_links_delete_img.setAttribute("src", "../img/svg fontawesome/delete.png");
//     profile_social_links_delete_img.setAttribute("class", "profile-social-links_delete")
//     profile_card.append(profile_card_header);
//     profile_card.append(profile_social_links);
//     profile_card_header.append(profile_card_image);
//     profile_card_header.append(profile_card_name);
//     profile_card_header.append(profile_card_position);
//     profile_card_header.append(profile_card_role);
//     profile_social_links.append(profile_social_links_edit);
//     profile_social_links_edit.append(profile_social_links_edit_a);
//     profile_social_links_edit_a.append(profile_social_links_edit_img);
//     profile_social_links.append(profile_social_links_stop);
//     profile_social_links_stop.append(profile_social_links_stop_a);
//     profile_social_links_stop_a.append(profile_social_links_stop_img);
//     profile_social_links.append(profile_social_links_delete);
//     profile_social_links_delete.append(profile_social_links_delete_a);
//     profile_social_links_delete_a.append(profile_social_links_delete_img);
//     $(".registration_jumbotron").append(profile_card);
//     $(".registration_popup").hide();
// })



// // delete profile - card
// $(".profile-card").click(function(e) {
//     if (e.target.classList.contains("profile-social-links_delete")) {
//         e.target.parentNode.parentNode.parentNode.parentNode.remove();
//     }
//     console.log(e.target)
// })


// //get value
// var profile_image = document.getElementById("profile_image").getAttribute("src");
// var profile_name = document.getElementById("registration_popup_left_profile_name").value;
// var profile_surname = document.getElementById("registration_popup_left_profile_surname").value;
// var profile_position = document.getElementById("registration_popup_left_profile_position").value;
// var profile_role = document.getElementById("registration_popup_right_profile_role").value;
// var registration_jumbotron = document.querySelector(".registration_jumbotron");
// var confirm = document.getElementById("create");

// //create elements
// var profile_card = document.createElement("div");
// profile_card.setAttribute("class", "profile-card");
// var profile_card_header = document.createElement("div");
// profile_card_header.setAttribute("class", "profile-card-header");
// var profile_card_image = document.createElement("img");
// var profile_card_name = document.createElement("h1");
// profile_card_name.innerHTML = profile_name;
// var profile_card_position = document.createElement("h2");
// var profile_card_role = document.createElement("span");
// var profile_social_links = document.createElement("ul");
// profile_social_links.setAttribute("class", "profile-social-links");
// var profile_social_links_edit = document.createElement("li");
// var profile_social_links_edit_a = document.createElement("a");
// var profile_social_links_edit_img = document.createElement("img");
// var profile_social_links_stop_img = document.createElement("img");
// var profile_social_links_delete_img = document.createElement("img");
// confirm.addEventListener("click", function() {
//     registration_jumbotron.append(profile_card);
//     profile_card.append(profile_card_header);
//     profile_card.append(profile_social_links);
//     profile_card_header.append(profile_card_image);
//     profile_card_image.setAttribute("src", profile_image);
//     profile_card_header.append(profile_card_name);
//     profile_card_name.innerHTML = profile_name;
//     profile_card_header.append(profile_card_position);
//     profile_card_header.append(profile_card_role);
//     profile_social_links.append(profile_social_links_edit);
//     profile_social_links_edit.append(profile_social_links_edit_a);
//     profile_social_links_edit_a.append(profile_social_links_edit_img);
//     profile_social_links.append(profile_social_links_stop);
//     profile_social_links_stop.append(profile_social_links_stop_a);
//     profile_social_links_stop_a.append(profile_social_links_stop_img);
//     profile_social_links.append(profile_social_links_delete);
//     profile_social_links_delete.append(profile_social_links_delete_a);
//     profile_social_links_delete_a.append(profile_social_links_delete_img);

// })
// var profile_image = document.getElementById("profile_image").getAttribute("src");
// var profile_name = document.getElementById("registration_popup_left_profile_name").value;
// var profile_surname = document.getElementById("registration_popup_left_profile_surname").value;
// var profile_position = document.getElementById("registration_popup_left_profile_position").value;
// var profile_role = document.getElementById("registration_popup_right_profile_role").value;
// var registration_jumbotron = document.querySelector(".registration_jumbotron");
// var confirm = document.getElementById("create");

// $("#create").click(function() {
//     var profile_image = document.getElementById("profile_image").getAttribute("src");
//     var profile_name = document.getElementById("registration_popup_left_profile_name").value;
//     var profile_surname = document.getElementById("registration_popup_left_profile_surname").value;
//     var profile_position = document.getElementById("registration_popup_left_profile_position").value;
//     var profile_role = document.getElementById("registration_popup_right_profile_role").value;
//     var profile_card = document.createElement("div");
//     var profile_card_header = document.createElement("div");
//     var profile_card_image = document.createElement("img");
//     var profile_card_name = document.createElement("h1");
//     var profile_card_position = document.createElement("h2");
//     var profile_card_role = document.createElement("span");
//     var profile_social_links = document.createElement("ul");
//     var profile_social_links_edit = document.createElement("li");
//     var profile_social_links_edit_a = document.createElement("a");
//     var profile_social_links_edit_img = document.createElement("img");
//     var profile_social_links_stop = document.createElement("li");
//     var profile_social_links_stop_a = document.createElement("a");
//     var profile_social_links_stop_img = document.createElement("img");
//     var profile_social_links_delete = document.createElement("li");
//     var profile_social_links_delete_a = document.createElement("a");
//     var profile_social_links_delete_img = document.createElement("img");
//     document.querySelector(".registration_jumbotron").append(profile_card);
//     profile_card.setAttribute("class", "profile-card");
//     profile_card.append(profile_card_header);
//     profile_card_header.setAttribute("class", "profile-card-header");
//     profile_card_header.append(profile_card_image);
//     profile_card_image.setAttribute("src", profile_image);
//     profile_card_header.append(profile_card_name);
//     profile_card_name.innerHTML = profile_name + " " + profile_surname;
//     profile_card_header.append(profile_card_position);
//     profile_card_position.innerHTML = `~ ${profile_position} ~`;
//     profile_card_header.append(profile_card_role);
//     profile_card_role.innerHTML = `Role: <br> ${profile_role}`;
//     profile_card.append(profile_social_links);
//     profile_social_links.setAttribute("class", "profile-social-links");
//     profile_social_links.append(profile_social_links_edit);
//     profile_social_links_edit.append(profile_social_links_edit_a);
//     profile_social_links_edit_a.setAttribute("href", "profile.html");
//     profile_social_links_edit_a.setAttribute("data-text", "Edit");
//     profile_social_links_edit_a.append(profile_social_links_edit_img);
//     profile_social_links_edit_img.setAttribute("src", "../img/svg fontawesome/Male-user-edit-icon.png");
//     profile_social_links.append(profile_social_links_stop);
//     profile_social_links_stop.append(profile_social_links_stop_a);
//     profile_social_links_stop_a.setAttribute("href", "#");
//     profile_social_links_stop_a.setAttribute("data-text", "Stop");
//     profile_social_links_stop_a.append(profile_social_links_stop_img);
//     profile_social_links_stop_img.setAttribute("src", "../img/svg fontawesome/deactivate.png");
//     profile_social_links.append(profile_social_links_delete);
//     profile_social_links_delete.append(profile_social_links_delete_a);
//     profile_social_links_delete_a.setAttribute("href", "#");
//     profile_social_links_delete_a.setAttribute("data-text", "Delete");
//     profile_social_links_delete_a.append(profile_social_links_delete_img);
//     profile_social_links_delete_img.setAttribute("src", "../img/svg fontawesome/delete.png");
//     profile_social_links_delete_img.setAttribute("class", "profile-social-links_delete");
// })





// $("#create").click(function() {
//     $(".registration_popup").hide();
// })

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