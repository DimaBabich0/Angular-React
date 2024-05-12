import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent {

  Name = "Бабич Дмитрий Евгеньевич"

  Education1 = "Одесская общеобразовательная школа №72"
  EducationPeriod1 = "Годы обучения: 2011 - 2022"

  Education2 = "Компьютерная Академия ШАГ"
  EducationPeriod2 = "Годы обучения: 2022 - 2026"

  Skills = ["Пунктуальность", "Трудолюбие", "Отвественность", "Быстрая обучаемость"]

  ProjectInfo1 = ["House Management", "Программа для записи информации о жителях дома", "Ссылка: https://github.com/DimaBabich0/HouseManagement"]
  ProjectInfo2 = ["Hangman", 'Игра "Виселица" написанная на языке C++', "Ссылка: https://github.com/DimaBabich0/Hangman"]

  Languages = ["Русский", "Украинский", "Английский"]

  ContactInfo = "Контактная информация: babichdima578@gmail.com | +38 (063) 679-09-02 | www.DimaBabich.com"
}
