/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

/**
 * Domain class for a popular music artist.（流行音乐艺术家的域类。艺术家可能是个人，也可能是乐队)
 * 
 * @author Richard Warburton
 */
public final class Artist {
    
    private String name;
    private List<Artist> members;
    private String nationality;
    
    public Artist(String name, String nationality) {
        this(name, Collections.emptyList(), nationality);
    }

    public Artist(String name, List<Artist> members, String nationality) {
        Objects.requireNonNull(name);
        Objects.requireNonNull(members);
        Objects.requireNonNull(nationality);
        this.name = name;
        this.members = new ArrayList<>(members);
        this.nationality = nationality;
    }

    /**
     * 获取艺术家的名称，艺术家可能是个人，也可能是乐队， 一般乐队以The开头
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * 获取乐队中的所有成员
     * @return the members
     */
    public Stream<Artist> getMembers() {
        return members.stream();
    }

    /**
     * 获取艺术家的国籍
     * @return the nationality
     */
    public String getNationality() {
        return nationality;
    }

    /** 是否是独唱 */
    public boolean isSolo() {
        return members.isEmpty();
    }

    /** 是否来自nationality国家 */
    public boolean isFrom(String nationality) {
        return this.nationality.equals(nationality);
    }

    @Override
    public String toString() {
        return getName();
    }

    public Artist copy() {
        List<Artist> members = getMembers().map(Artist::copy).collect(toList());
        return new Artist(name, members, nationality);
    }

}
