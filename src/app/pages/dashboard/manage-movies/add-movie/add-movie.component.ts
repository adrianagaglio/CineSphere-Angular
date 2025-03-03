import { MoviesService } from './../../../../services/movies.service';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadService } from '../../../../services/upload.service';
import { iGenre } from '../../../../interfaces/igenre';
import { iActor } from '../../../../interfaces/iactor';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  constructor(
    private fb: FormBuilder,
    private movieSvc: MoviesService,
    private uploadSvc: UploadService
  ) {}

  private activeModal = inject(NgbActiveModal);

  genres!: iGenre[];
  actors!: iActor[];

  selectedFile: File | null = null;

  movieRequest!: FormGroup;

  ngOnInit() {
    combineLatest(
      this.movieSvc.getAllActors(),
      this.movieSvc.getAllGenres()
    ).subscribe(([actors, genres]) => {
      this.actors = actors;
      this.genres = genres;
    });

    this.movieRequest = this.fb.group({
      title: this.fb.control(null, [Validators.required]),
      description: this.fb.control(null, [Validators.required]),
      coverImage: this.fb.control(null, [Validators.required]),
      year: this.fb.control(null, [Validators.required]),
      director: this.fb.control(null, [Validators.required]),
      actors: this.fb.control([], [Validators.required]),
      genres: this.fb.control([], [Validators.required]),
    });
  }

  isTouchedInvalid(field: string) {
    return (
      this.movieRequest.get(field)?.touched &&
      this.movieRequest.get(field)?.invalid
    );
  }

  setGenres(genre: Event) {
    let genres = this.movieRequest.get('genres')?.getRawValue();
    let selectedGenre = genre.target as HTMLSelectElement;
    if (!genres.includes(selectedGenre.value)) {
      genres.push(selectedGenre.value);
    } else {
      genres = genres.filter((g: string) => g !== selectedGenre.value);
    }
    this.movieRequest.get('genres')?.setValue(genres);
  }

  setActors(actor: Event) {
    let actors = this.movieRequest.get('actors')?.getRawValue();
    let selectedActor = actor.target as HTMLSelectElement;
    console.log(selectedActor.value);

    // if (!actors.some((a: string) => a === selectedActor.value)) {
    //   actors.push(selectedActor.value);
    // } else {
    //   actors = actors.filter((a: string) => a !== selectedActor.value);
    // }
    // this.movieRequest.get('actors')?.setValue(actors);
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  addMovie() {
    if (this.movieRequest.valid) {
      const formData = new FormData();
      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
        this.uploadSvc.upload(formData).subscribe((url) => {
          if (url) {
            this.movieRequest.get('coverImage')?.setValue(url);
            console.log(this.movieRequest.value);
            // this.movieSvc.addMovie(this.movieRequest.value).subscribe((movie) => {
            //   this.activeModal.close(movie);
            // });
          }
        });
      }
    }
  }
}
