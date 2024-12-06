import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
	id?: number;

	@Column({ nullable: false, type: "varchar" })
    description!: string;

    @Column({ nullable: false, type: "varchar" })
    descriptionEmbed!: string;

    @Column({ nullable: false, type: "varchar" })
    username!: string;

    @Column({ nullable: false, type: "varchar" })
    password!: string;

    public constructor(username: string, password: string, description?: string) {
        this.username = username;
        this.password = password;
        this.description = description ?? '';
    }
}
