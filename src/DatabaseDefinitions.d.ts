export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export interface Database {
	public: {
		Tables: {
			main: {
				Row: {
					created_at: string | null;
					hang_phuc: number | null;
					id: number;
					lay_dai: number | null;
					lhs: number | null;
					qt_chu_tara: number | null;
					seven_lines: number | null;
					tam: number | null;
					tara: number | null;
					taras_homage: number | null;
					vo_niem: number | null;
				};
				Insert: {
					created_at?: string | null;
					hang_phuc?: number | null;
					id?: number;
					lay_dai?: number | null;
					lhs?: number | null;
					qt_chu_tara?: number | null;
					seven_lines?: number | null;
					tam?: number | null;
					tara?: number | null;
					taras_homage?: number | null;
					vo_niem?: number | null;
				};
				Update: {
					created_at?: string | null;
					hang_phuc?: number | null;
					id?: number;
					lay_dai?: number | null;
					lhs?: number | null;
					qt_chu_tara?: number | null;
					seven_lines?: number | null;
					tam?: number | null;
					tara?: number | null;
					taras_homage?: number | null;
					vo_niem?: number | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
