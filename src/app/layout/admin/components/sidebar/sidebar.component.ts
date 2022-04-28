import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { MenuItem } from 'src/app/shared/models/menu.model'
import { ThemeService } from 'src/app/shared/services/theme.service'
import packageJson from '../../../../../../package.json'
import { MenuService } from '../../services/menu.service'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	public isOpen$: Observable<boolean> = new Observable<boolean>();
	public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
	public appJson: any = packageJson

	constructor(
		public themeService: ThemeService,
		private menuService: MenuService
	) {
		this.isOpen$ = this.menuService.isOpen$;
		this.pagesMenu$ = this.menuService.pagesMenu$
	}

	ngOnInit(): void { }

	public toggleSidebar() {
		this.menuService.toggleSidebar();
	}

	toggleTheme() {
		this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light'
	}
}
