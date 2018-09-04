var Youtube = /** @class */ (function () {
    function Youtube(title, channelName, publishedDate, duration, videoType, views, subscriber, likes, dislikes, noOfComments, notification, description, noOfShare, addToWishList, addToWatchLater, autoPlay) {
        var _this = this;
        this.title = title;
        this.channelName = channelName;
        this.publishedDate = publishedDate;
        this.duration = duration;
        this.videoType = videoType;
        this.views = views;
        this.subscriber = subscriber;
        this.likes = likes;
        this.dislikes = dislikes;
        this.noOfComments = noOfComments;
        this.notification = notification;
        this.description = description;
        this.noOfShare = noOfShare;
        this.addToWishList = addToWishList;
        this.addToWatchLater = addToWatchLater;
        this.autoPlay = autoPlay;
        this.getTitle = function () {
            return _this.title;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getPublishedDate = function () {
            return _this.publishedDate;
        };
        this.getDuration = function () {
            return _this.duration;
        };
        this.getVideoType = function () {
            return _this.videoType;
        };
        this.getNotification = function () {
            return _this.notification;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getNoOfShare = function () {
            return _this.noOfShare;
        };
        this.title = title;
        this.channelName = channelName;
        this.publishedDate = publishedDate;
        this.duration = duration;
        this.videoType = videoType;
        this.views = views;
        this.subscriber = subscriber;
        this.likes = likes;
        this.dislikes = dislikes;
        this.noOfComments = noOfComments;
        this.description = description;
        this.noOfShare = noOfShare;
        this.addToWishList = addToWishList;
        this.addToWatchLater = addToWatchLater;
        this.autoPlay = autoPlay;
    }
    return Youtube;
}());
var details = new Youtube("Stay Happy", "HARSH", "12TH MARCH,2018", "20:05 minutes", "Motivational", 9999, 97923, 2344, 43, 888, "ON", "Must Watch This If You Want To Stay Happy", 77, "OFF", "OFF", "ON");
console.log("Title-> " + details.getTitle());
console.log("Duration-> " + details.getDuration());
console.log("Type-> " + details.getVideoType());
console.log("Total no. of views-> " + details.views + " views");
console.log("Total no. of likes-> " + details.likes);
console.log("Total no. of dislikes-> " + details.dislikes);
console.log("Channel Name-> " + details.getChannelName());
console.log("Total no. of share-> " + details.getNoOfShare());
console.log("Publishing Date-> " + details.getPublishedDate());
console.log("Description-> " + details.getDescription());
console.log("Total no. of subscriber-> " + details.subscriber);
console.log("Total no. of comments-> " + details.noOfComments);
console.log("Notification-> " + details.getNotification());
console.log("Add to wishlist-> " + details.addToWishList);
console.log("Add to watch Later-> " + details.addToWatchLater);
console.log("Autoplay-> " + details.autoPlay);
