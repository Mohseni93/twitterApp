export interface Posts{
    id ?: number,
    userName ?: string,
    userId ?: string,
    imgProfile ?: string,
    time ?: string,
    caption ?: string,
    reTweet ?: Posts[],
    imgPost ?: string[],
    numberComment ?: number,
    numberForward ?: number,
    numberLike ?: number,
}