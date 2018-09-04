class Youtube{
   
    constructor (
        private title:string,  
        private channelName:string , 
        private publishedDate:string,
        private duration : string,
        private videoType:string,
        public views:number,
        public subscriber:number,
        public likes : number , 
        public dislikes : number ,
        public noOfComments:number,
        protected notification:string,
        private description:string,
        private noOfShare: number, 
        public addToWishList: string,
        public addToWatchLater:string,
        public autoPlay:string,
    )
    {
        this.title=title
        this.channelName=channelName
        this.publishedDate=publishedDate
        this.duration=duration
        this.videoType=videoType
        this.views=views
        this.subscriber=subscriber
        this.likes=likes
        this.dislikes=dislikes
        this.noOfComments=noOfComments
        this.description=description
        this.noOfShare=noOfShare
        this.addToWishList=addToWishList
        this.addToWatchLater=addToWatchLater
        this.autoPlay=autoPlay
    }
     
            getTitle=()=>{
               return this.title
            }
            getChannelName=()=>{
               return this.channelName
            }
            getPublishedDate=()=>{
               return this.publishedDate
            } 
            getDuration =()=>{
               return this.duration
            }
            getVideoType =()=>{
               return this.videoType
            }
            getNotification =()=>{
                return this.notification
            }
            getDescription =()=>{
               return this.description
            }
            getNoOfShare =()=>{
               return this.noOfShare
            }
}
   
   let details = new Youtube("Stay Happy","HARSH","12TH MARCH,2018","20:05 minutes","Motivational",9999,97923,2344,43,888,"ON","Must Watch This If You Want To Stay Happy",77,"OFF","OFF","ON")

   console.log("Title-> "+details.getTitle())
   console.log("Duration-> "+details.getDuration())
   console.log("Type-> "+details.getVideoType())
   console.log("Total no. of views-> "+details.views +" views")
   console.log("Total no. of likes-> "+details.likes)
   console.log("Total no. of dislikes-> "+details.dislikes)
   console.log("Channel Name-> "+details.getChannelName())
   console.log("Total no. of share-> "+details.getNoOfShare())
   console.log("Publishing Date-> "+details.getPublishedDate())
   console.log("Description-> "+details.getDescription())
   console.log("Total no. of subscriber-> "+details.subscriber)
   console.log("Total no. of comments-> "+details.noOfComments)
   console.log("Notification-> "+details.getNotification())
   console.log("Add to wishlist-> "+details.addToWishList)
   console.log("Add to watch Later-> "+details.addToWatchLater)
   console.log("Autoplay-> "+details.autoPlay)
  
   
  