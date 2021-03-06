/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="Scene.ts" />
/// <reference path="GameObject.ts" />
module com.camelot.iwg {

	var CAMELOT: any = com.camelot,
		CORE = CAMELOT.core,
        IWG = CAMELOT.iwg,
        GAMEOBJECT = IWG.GameObject,
        CLICKABLEGAMEOBJECT = IWG.ClickableGameObject,
		TICKET = IWG.Ticket,
		SPRITESHEETS = IWG.SpriteSheets;

	export class EndGame extends Scene {

		private _wager = CORE.IWG.ame('get', { vars: ['iwgIsWager'] });
		private _amount = TICKET.getInstance().getOutcome().amount;
        private _isWinner = Number(TICKET.getInstance().getParams().wT);

		private _finishMessage;
		private _finishAmount;
		private _finishButton;

		constructor(_name) {
			super(_name);
			this._endGameLayout();
			this._subscribeEndGame();
		}

		private _subscribeEndGame() {
			IWG.IWGEM.on('showEndGame', this._showEndGame.bind(this));
		}
		
		private _showEndGame() {
			TweenMax.to(this.getDiv(), 1, { scale: 1, alpha: 1, ease:Bounce.easeOut });
			IWG.IWGEM.trigger( 'disableCard' );
			IWG.IWGEM.trigger( 'instructionsSetActive', [false] );
		}

		private _endGameLayout() {

			// background creation
			var endGameBackground = new GAMEOBJECT("endGameBackground", { w: 276,h: 119}, 1, this);
			endGameBackground.addBitmap({
				name: "background",
				pos: {
					x: 138,
					y: 59
				},
				frame: "end_bg",
				spriteSheet: SPRITESHEETS.getInstance().getSpriteSheet("frostyBingo"),
				doReg: {
					center: true
				}
			});
			
			// button creation
			var endGameButton = new CLICKABLEGAMEOBJECT("endGameButton", { w: 188,h: 81}, 1, this);
			endGameButton.addBitmap({
				name: "button",
				pos: {
					x: 94,
					y: 40
				},
				frame: "button_finish",
				spriteSheet: SPRITESHEETS.getInstance().getSpriteSheet("frostyBingo"),
				doReg: {
					center: true
				}
			});
			endGameButton.setPosition({
				x: 45, 
				y: 90
			});
			endGameButton.setEnabled(true);
			
			endGameButton.addAnimation('rollOver');
			endGameButton.addAnimation('rollOut');
			
			endGameButton.setAnimation('rollOver', 'rollover', 0.2, 0, 1.2);
			endGameButton.setAnimation('rollOut', 'rollout', 0.2, 0);
			
			var tl = new TimelineMax({repeat:-1, delay:4});
			tl.add( TweenMax.to(endGameButton.getCanvas(), 1, {scaleX:1.1,scaleY:1.1}),"down");
			tl.add( TweenMax.to(endGameButton.getCanvas(), 1, {scaleX:1,  scaleY:1}),"up");	
			endGameButton.animationTimeLine = tl;
				
			endGameButton.setAction('click', () => {
				endGameButton.setEnabled(false);
                CORE.IWG.ame('closeGame');
			});
			
			endGameButton.setAction('rollover', function(endGamebutton) {
				endGameButton.animationTimeLine.seek(0);
				endGameButton.animationTimeLine.pause();			
				endGameButton.setScale(1,1);
					
				endGameButton.animate('rollOver');
			}.bind(null, endGameButton));
			
			endGameButton.setAction('rollout', function(endGamebutton) {
				endGameButton.animationTimeLine.restart(true, false);
				endGameButton.animate('rollOut');
			}.bind(null, endGameButton));
			
			
			// text createion
			var endTextFrame: string = null,
				endTextPos = {
					x: 39,
					y: 10
				};	
			if ( this._wager ){
				if ( this._isWinner === 1 ) {
					endTextFrame = "end_win";
				} else {
					endTextFrame = "end_lose";
					endTextPos.y = 30;
				};
			} else {
				endTextFrame = "end_trial";
				endTextPos.y = 30;
			};
			
			var endGameText = new GAMEOBJECT( "endGameText", { w: 200, h: 50 }, 1, this );
			endGameText.addBitmap({
				name: "button",
				pos: {
					x: 100,
					y: 25
				},
				frame: endTextFrame,
				spriteSheet: SPRITESHEETS.getInstance().getSpriteSheet("frostyBingo"),
				doReg: {
					center: true
				}
			});
			endGameText.setPosition({
				x: endTextPos.x, 
				y: endTextPos.y
			});
			
			// amount
			if ( this._isWinner === 1 && this._wager ) {
				console.log("end_" + this._amount);
				var endGameAmount = new GAMEOBJECT( "endGameAmount", { w: 193, h: 35 }, 1, this );
				endGameAmount.addBitmap({
					name: "endGameAmount",
					pos: {
						x: 97,
						y: 18
					},
					frame: "end" + this._amount,
					spriteSheet: SPRITESHEETS.getInstance().getSpriteSheet("frostyBingo"),
					doReg: {
						center: true
					}
				});
				endGameAmount.setPosition({
					x: 41, 
					y: 60
				});
			};
		}
	}
}