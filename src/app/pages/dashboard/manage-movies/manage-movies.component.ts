import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { iMovie } from '../../../interfaces/imovie';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMovieComponent } from './add-movie/add-movie.component';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrl: './manage-movies.component.scss',
})
export class ManageMoviesComponent {
  constructor(private movieSvc: MoviesService) {}

  private modalService = inject(NgbModal);

  movies!: iMovie[];

  pages: number[] = [];
  currentPage: number = 0;
  size: number = 4;
  totalElements!: number;

  orderAsc: boolean = false;
  sort: string[] = ['title'];

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieSvc
      .paged(this.currentPage, this.size, this.sort)
      .subscribe((res) => {
        this.movies = res.content;

        this.totalElements = res.totalElements;
        this.pages = this.getPages(res.totalPages);
        this.currentPage = this.pages[0];
      });
  }

  getPages(totalPages: number) {
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  changePageAndSize(page: number = this.currentPage, sort: string[] = []) {
    this.sort = sort[0] ? sort : this.sort;
    this.movieSvc.paged(page, this.size, this.sort).subscribe((res) => {
      this.pages = this.getPages(res.totalPages);
      this.movies = res.content;
      this.currentPage = res.pageable.pageNumber;
    });
  }

  order(page: number = this.currentPage, sort: string[] = []) {
    this.sort = sort[0] ? sort : this.sort;
    this.orderAsc = !this.orderAsc;
    this.sort = [this.sort[0] + (this.orderAsc ? ',asc' : ',desc')];
    this.changePageAndSize(this.currentPage, this.sort);
  }

  addMovie() {
    const modalRef = this.modalService.open(AddMovieComponent, {
      size: 'lg',
      centered: true,
    });

    modalRef.result
      .then((movie) => {
        if (movie) {
          console.log(movie);
        }
      })
      .catch((err) => {
        this.modalService.dismissAll();
      });
  }
}
