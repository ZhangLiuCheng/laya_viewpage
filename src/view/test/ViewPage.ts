/**Created by the LayaAirIDE*/

module view.test {

	import Image = Laya.Image;

	let screenWidth = 750;
	let screenHeight = 1334;

	let touchX = -1;
	let hboxDownX = -1;
	let page = 0;
	let touchDown = false;

	export class ViewPage extends ui.test.ViewPageUI {
		constructor() {
			super();

			this.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
			this.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
			this.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
			this.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);

			this.btnPrevious.on("click", this, this.previousPage);
			this.btnNext.on("click", this, this.nextPage);

			let imgs = ["a.png", "b.png", "c.png", "d.png"];
			imgs.forEach(item => {
				let img:Image = new Image(item);
				img.width = screenWidth;
				img.height = screenHeight;

				this.hbox.addChild(img);
			});
		}

		// ----------------------- mouse event start ------------------------
		private mouseDown(event) {
			// console.log("-----------mouseDown:", event);
			touchX = event.stageX;
			hboxDownX = this.hbox.x;
			touchDown = true;
		}

		private mouseMove(event) {
			// console.log("-----------mouseMove:", touchDown);
			if (!touchDown) {
				return;
			}
			let distance = event.stageX - touchX;
			let hx = this.hbox.x + distance;
			if (hx > 0) {
				hx = 0;
			}
			if (hx < -screenWidth * 3) {
				hx = -screenWidth * 3;
			}
			this.hbox.x = hx;
			touchX = event.stageX
		}

		/**
		 * 鼠标离开屏幕
		 */
		private mouseUp(event: string) {
			if (touchDown == false) {
				return;
			}
			touchX = -1;
			touchDown = false;

			let space = this.hbox.x - hboxDownX;
			if (space > 200) {
				page -= 1;
			} else if (space < -200) {
				page += 1;
			}
			// this.hbox.x = page * 750;
			this.setPage(page);

		}
		// ----------------------- mouse event end ------------------------

		private previousPage() {
			page -= 1;
			if (page < 0) {
				page = 0;
			}
			this.setPage(page)
		}

		private nextPage() {
			page += 1;
			if (page > 3) {
				page = 3;
			}
			this.setPage(page)
		}

		private setPage(page) {
			Laya.Tween.to(this.hbox, { x: -page * screenWidth }, 400, Laya.Ease.linearIn, null);
		}
	}
}