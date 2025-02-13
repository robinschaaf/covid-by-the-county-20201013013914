import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewSwipeToDismissService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getId = (): string => 'swipeToDismiss';

    getTitle = (): string => 'Swipe to dismiss';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'swipe-to-dismiss/0', 'title': 'Small item + header', 'theme': 'layout1' },
            { 'url': 'swipe-to-dismiss/1', 'title': 'Products + CTA', 'theme': 'layout2' },
            { 'url': 'swipe-to-dismiss/2', 'title': 'Full with image + left swipe', 'theme': 'layout3' }
        ];
    }

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    //* Data Set for page 1
    getDataForLayout1 = (): any => {
        return {
            'headerTitle': 'Small item + header',
            "header": "Inbox",
            "title": "8 new mesages",
            "subtitle": "Mark all messages as read.",
            "button": "ok",
            "items": [
                {
                    "id": 1,
                    "title": "Yasmine Hassan",
                    "subtitle": "AIGA Design Conference",
                    "time": "6min ago",
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    "id": 2,
                    "title": "Adam Wolters",
                    "subtitle": "An Event Apart",
                    "time": "58min ago",
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    "id": 3,
                    "title": "Livia Koning",
                    "subtitle": "Core 77 Conference",
                    "time": "12min ago",
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    "id": 4,
                    "title": "Fatima Hussein",
                    "subtitle": "London Design Festival",
                    "time": "23min ago",
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    "id": 5,
                    "title": "Lars Sambo",
                    "subtitle": "NeoCon",
                    "time": "43min ago",
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    "id": 6,
                    "title": "Kyan Zhou",
                    "subtitle": "New York Times Cities for Tomorrow",
                    "time": "62min ago",
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    "id": 7,
                    "title": "Amina Mohan",
                    "subtitle": "Salone del Mobile Milano",
                    "time": "81min ago",
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                },
                {
                    "id": 8,
                    "title": "Emir van der Velden",
                    "subtitle": "Creative Mornings",
                    "time": "98min ago",
                    'iconDelate': 'icon-delete',
                    'iconUndo': 'icon-undo-variant'
                }
            ]
        };
    }


    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'headerTitle': 'Products + CTA',
            "header": "Followings",
            "items": [
                {
                    "id": 1,
                    "title": "Isabel Anguiano",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/imgs/avatar/9.jpg",
                    "ionBadge": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 2,
                    "title": "Iria Mascareñas",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/imgs/avatar/10.jpg",
                    "ionBadge": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 3,
                    "title": "Maria Cardenas",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/imgs/avatar/11.jpg",
                    "ionBadge": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 4,
                    "title": "Silvia Salvador",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/imgs/avatar/12.jpg",
                    "ionBadge": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 5,
                    "title": "Marina Vidal",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur.",
                    "image": "assets/imgs/avatar/13.jpg",
                    "ionBadge": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 6,
                    "title": "Sara Alcántarl",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/imgs/avatar/14.jpg",
                    "ionBadge": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 7,
                    "title": "Gabriela Reyes",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/imgs/avatar/15.jpg",
                    "ionBadge": "Follow",
                    "delate": "Delete"
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'headerTitle': 'Full with image + left swipe',
            "items": [
                {
                    "id": 1,
                    "title": "Acoustic Guitars",
                    "subtitle": "Pre-sale",
                    "image": "assets/imgs/background/10.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 2,
                    "title": "Bass guitar",
                    "subtitle": "Order now!",
                    "image": "assets/imgs/background/13.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 3,
                    "title": "Classical guitar",
                    "subtitle": "Pre-sale",
                    "image": "assets/imgs/background/15.jpg",
                    "delate": "Delete"
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/swipeToDismiss/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
