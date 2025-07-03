import { Component, input, OnInit, output, signal } from '@angular/core';
import { SkillModel } from '../Classes/skill-model';
import { SkillDataService } from '../Services/skill-data-service';
import { TypeSkillEnum } from '../Enum/TypeSkillEnum';

@Component({
  selector: 'app-skills-filter',
  imports: [],
  templateUrl: './skills-filter.html',
  styleUrl: './skills-filter.css',
})
export class SkillsFilter implements OnInit {
  skillFiltered = output<SkillModel[]>();
  skills = signal<SkillModel[]>([]);

  skillTypeFiltering = input<TypeSkillEnum>(TypeSkillEnum.Framework);

  constructor(private readonly skillService: SkillDataService) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((skills) => {
      this.skills.set(skills);
    });
  }

  EmitNewListSkills() {
    this.filterBy();
    this.skillFiltered.emit(this.skills());
  }

  filterBy() {
    this.skills.set(
      this.skills().filter((x) => x.TypeSkill === this.skillTypeFiltering())
    );
  }
}
