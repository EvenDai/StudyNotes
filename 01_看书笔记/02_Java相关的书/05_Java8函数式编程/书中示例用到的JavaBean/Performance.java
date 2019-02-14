import java.util.stream.Stream;

import static java.util.stream.Stream.concat;

public interface Performance {

    /** 获取专辑名称 */
    public String getName();

    /** 获取所有参与专辑制作的艺术家（可能是个人也可能是乐队） */
    public Stream<Artist> getMusicians();

    // TODO: test
    public default Stream<Artist> getAllMusicians() {
        return getMusicians().flatMap(artist -> concat(Stream.of(artist), artist.getMembers()));
    }

}
