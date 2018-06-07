export class LikeComponent {

  constructor(private _CountLikes:number, private _IsSelected: boolean) { }

  OnClick() {
    this._CountLikes += (this._IsSelected) ? -1 : 1;
    this._IsSelected = !this._IsSelected;
  }

  get CountLikes() {
    return this._CountLikes;
  }

  get IsSelected() {
    return this._IsSelected;
  }

}
