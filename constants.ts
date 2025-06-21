
import { SectionId, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: SectionId.Home, label: 'Inicio' },
  { id: SectionId.Services, label: 'Servicios' },
  { id: SectionId.SelfAssessment, label: 'Test de Autoevaluación' },
  { id: SectionId.Contact, label: 'Contacto' },
];

export const APP_TITLE = "Asesoría Escolar";
export const APP_SUBTITLE = "Apoyo para Estudiantes en Riesgo";

export const FOOTER_CONTACT_INFO = "info@asesoriaescolar.edu";
export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} Asesoría Escolar. Todos los derechos reservados.`;
